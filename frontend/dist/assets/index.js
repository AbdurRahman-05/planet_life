const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home_v4.js",
      "assets/rolldown-runtime.js",
      "assets/ScrollReveal.js",
      "assets/vendor-react.js",
      "assets/vendor-ui.js",
      "assets/AdminContext.js",
      "assets/storyImages.js",
      "assets/lucide-react.js",
      "assets/Home.css",
      "assets/Destinations.js",
      "assets/card.js",
      "assets/DestinationDetail.js",
      "assets/embla-carousel-autoplay.esm.js",
      "assets/tabs.js",
      "assets/Packages.js",
      "assets/About.js",
      "assets/Contact.js",
      "assets/textarea.js",
      "assets/Booking.js",
      "assets/Quote.js",
      "assets/Privacy.js",
      "assets/Terms.js",
      "assets/NotFound.js",
      "assets/Login.js",
      "assets/Dashboard.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, t } from "./rolldown-runtime.js";
import {
  a as n,
  b as r,
  i,
  n as a,
  o,
  s,
  t as c,
  v as l,
  x as u,
  y as d,
} from "./vendor-react.js";
import {
  $ as f,
  B as p,
  C as m,
  F as h,
  G as g,
  H as _,
  I as ee,
  J as v,
  K as y,
  L as b,
  M as x,
  N as S,
  P as C,
  Q as w,
  R as te,
  S as T,
  T as E,
  U as D,
  V as ne,
  W as O,
  X as k,
  Y as A,
  Z as re,
  _ as j,
  a as ie,
  at as ae,
  b as oe,
  c as M,
  ct as se,
  d as ce,
  et as le,
  f as ue,
  g as de,
  h as fe,
  j as pe,
  k as me,
  l as he,
  lt as N,
  m as ge,
  nt as P,
  o as F,
  ot as _e,
  p as ve,
  q as ye,
  rt as be,
  s as xe,
  st as Se,
  tt as I,
  u as Ce,
  ut as L,
  v as we,
  w as Te,
  x as Ee,
  y as De,
  z as Oe,
} from "./vendor-ui.js";
import {
  a as R,
  i as z,
  n as ke,
  o as Ae,
  t as je,
} from "./AdminContext.js";
import {
  A as Me,
  C as Ne,
  D as Pe,
  F as Fe,
  I as Ie,
  L as Le,
  N as Re,
  R as ze,
  S as Be,
  V as Ve,
  b as He,
  i as Ue,
  j as We,
  m as Ge,
  n as Ke,
  o as qe,
  r as Je,
  u as Ye,
  x as Xe,
  z as Ze,
} from "./lucide-react.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var Qe = d(),
  B = e(u(), 1),
  $e = 1,
  et = 1e6,
  tt = 0;
function nt() {
  return ((tt = (tt + 1) % (2 ** 53 - 1)), tt.toString());
}
var rt = new Map(),
  it = (e) => {
    if (rt.has(e)) return;
    let t = setTimeout(() => {
      (rt.delete(e), ct({ type: `REMOVE_TOAST`, toastId: e }));
    }, et);
    rt.set(e, t);
  },
  at = (e, t) => {
    switch (t.type) {
      case `ADD_TOAST`:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, $e) };
      case `UPDATE_TOAST`:
        return {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === t.toast.id ? { ...e, ...t.toast } : e,
          ),
        };
      case `DISMISS_TOAST`: {
        let { toastId: n } = t;
        return (
          n
            ? it(n)
            : e.toasts.forEach((e) => {
                it(e.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((e) =>
              e.id === n || n === void 0 ? { ...e, open: !1 } : e,
            ),
          }
        );
      }
      case `REMOVE_TOAST`:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
    }
  },
  ot = [],
  st = { toasts: [] };
function ct(e) {
  ((st = at(st, e)),
    ot.forEach((e) => {
      e(st);
    }));
}
function lt({ ...e }) {
  let t = nt(),
    n = (e) => ct({ type: `UPDATE_TOAST`, toast: { ...e, id: t } }),
    r = () => ct({ type: `DISMISS_TOAST`, toastId: t });
  return (
    ct({
      type: `ADD_TOAST`,
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (e) => {
          e || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function ut() {
  let [e, t] = B.useState(st);
  return (
    B.useEffect(
      () => (
        ot.push(t),
        () => {
          let e = ot.indexOf(t);
          e > -1 && ot.splice(e, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: lt,
      dismiss: (e) => ct({ type: `DISMISS_TOAST`, toastId: e }),
    }
  );
}
var dt = e(r(), 1),
  V = l(),
  ft = `ToastProvider`,
  [pt, mt, ht] = be(`Toast`),
  [gt, _t] = Se(`Toast`, [ht]),
  [vt, yt] = gt(ft),
  bt = (e) => {
    let {
        __scopeToast: t,
        label: n = `Notification`,
        duration: r = 5e3,
        swipeDirection: i = `right`,
        swipeThreshold: a = 50,
        announcerContainer: o,
        children: s,
      } = e,
      [c, l] = B.useState(null),
      [u, d] = B.useState(0),
      f = B.useRef(!1),
      p = B.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${ft}\`. Expected non-empty \`string\`.`,
        ),
      (0, V.jsx)(pt.Provider, {
        scope: t,
        children: (0, V.jsx)(vt, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: a,
          toastCount: u,
          viewport: c,
          onViewportChange: l,
          onToastAdd: B.useCallback(() => d((e) => e + 1), []),
          onToastRemove: B.useCallback(() => d((e) => e - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: p,
          announcerContainer: o,
          children: s,
        }),
      })
    );
  };
bt.displayName = ft;
var xt = `ToastViewport`,
  St = [`F8`],
  Ct = `toast.viewportPause`,
  wt = `toast.viewportResume`,
  Tt = B.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        hotkey: r = St,
        label: i = `Notifications ({hotkey})`,
        ...a
      } = e,
      o = yt(xt, n),
      s = mt(n),
      c = B.useRef(null),
      l = B.useRef(null),
      u = B.useRef(null),
      d = B.useRef(null),
      f = N(t, d, o.onViewportChange),
      p = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      m = o.toastCount > 0;
    (B.useEffect(() => {
      let e = (e) => {
        r.length !== 0 &&
          r.every((t) => e[t] || e.code === t) &&
          d.current?.focus();
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [r]),
      B.useEffect(() => {
        let e = c.current,
          t = d.current;
        if (m && e && t) {
          let n = () => {
              if (!o.isClosePausedRef.current) {
                let e = new CustomEvent(Ct);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !0));
              }
            },
            r = () => {
              if (o.isClosePausedRef.current) {
                let e = new CustomEvent(wt);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !1));
              }
            },
            i = (t) => {
              e.contains(t.relatedTarget) || r();
            },
            a = () => {
              e.contains(document.activeElement) || r();
            };
          return (
            e.addEventListener(`focusin`, n),
            e.addEventListener(`focusout`, i),
            e.addEventListener(`pointermove`, n),
            e.addEventListener(`pointerleave`, a),
            window.addEventListener(`blur`, n),
            window.addEventListener(`focus`, r),
            () => {
              (e.removeEventListener(`focusin`, n),
                e.removeEventListener(`focusout`, i),
                e.removeEventListener(`pointermove`, n),
                e.removeEventListener(`pointerleave`, a),
                window.removeEventListener(`blur`, n),
                window.removeEventListener(`focus`, r));
            }
          );
        }
      }, [m, o.isClosePausedRef]));
    let h = B.useCallback(
      ({ tabbingDirection: e }) => {
        let t = s().map((t) => {
          let n = t.ref.current,
            r = [n, ...Qt(n)];
          return e === `forwards` ? r : r.reverse();
        });
        return (e === `forwards` ? t.reverse() : t).flat();
      },
      [s],
    );
    return (
      B.useEffect(() => {
        let e = d.current;
        if (e) {
          let t = (t) => {
            let n = t.altKey || t.ctrlKey || t.metaKey;
            if (t.key === `Tab` && !n) {
              let n = document.activeElement,
                r = t.shiftKey;
              if (t.target === e && r) {
                l.current?.focus();
                return;
              }
              let i = h({ tabbingDirection: r ? `backwards` : `forwards` }),
                a = i.findIndex((e) => e === n);
              $t(i.slice(a + 1))
                ? t.preventDefault()
                : r
                  ? l.current?.focus()
                  : u.current?.focus();
            }
          };
          return (
            e.addEventListener(`keydown`, t),
            () => e.removeEventListener(`keydown`, t)
          );
        }
      }, [s, h]),
      (0, V.jsxs)(re, {
        ref: c,
        role: `region`,
        "aria-label": i.replace(`{hotkey}`, p),
        tabIndex: -1,
        style: { pointerEvents: m ? void 0 : `none` },
        children: [
          m &&
            (0, V.jsx)(Dt, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                $t(h({ tabbingDirection: `forwards` }));
              },
            }),
          (0, V.jsx)(pt.Slot, {
            scope: n,
            children: (0, V.jsx)(I.ol, { tabIndex: -1, ...a, ref: f }),
          }),
          m &&
            (0, V.jsx)(Dt, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                $t(h({ tabbingDirection: `backwards` }));
              },
            }),
        ],
      })
    );
  });
Tt.displayName = xt;
var Et = `ToastFocusProxy`,
  Dt = B.forwardRef((e, t) => {
    let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      a = yt(Et, n);
    return (0, V.jsx)(y, {
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: `fixed` },
      onFocus: (e) => {
        let t = e.relatedTarget;
        a.viewport?.contains(t) || r();
      },
    });
  });
Dt.displayName = Et;
var Ot = `Toast`,
  kt = `toast.swipeStart`,
  At = `toast.swipeMove`,
  jt = `toast.swipeCancel`,
  Mt = `toast.swipeEnd`,
  Nt = B.forwardRef((e, t) => {
    let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e,
      [s, c] = ye({ prop: r, defaultProp: i ?? !0, onChange: a, caller: Ot });
    return (0, V.jsx)(v, {
      present: n || s,
      children: (0, V.jsx)(It, {
        open: s,
        ...o,
        ref: t,
        onClose: () => c(!1),
        onPause: le(e.onPause),
        onResume: le(e.onResume),
        onSwipeStart: L(e.onSwipeStart, (e) => {
          e.currentTarget.setAttribute(`data-swipe`, `start`);
        }),
        onSwipeMove: L(e.onSwipeMove, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `move`),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-move-x`,
              `${t}px`,
            ),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-move-y`,
              `${n}px`,
            ));
        }),
        onSwipeCancel: L(e.onSwipeCancel, (e) => {
          (e.currentTarget.setAttribute(`data-swipe`, `cancel`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-y`));
        }),
        onSwipeEnd: L(e.onSwipeEnd, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `end`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-end-x`,
              `${t}px`,
            ),
            e.currentTarget.style.setProperty(
              `--radix-toast-swipe-end-y`,
              `${n}px`,
            ),
            c(!1));
        }),
      }),
    });
  });
Nt.displayName = Ot;
var [Pt, Ft] = gt(Ot, { onClose() {} }),
  It = B.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        type: r = `foreground`,
        duration: i,
        open: a,
        onClose: o,
        onEscapeKeyDown: s,
        onPause: c,
        onResume: l,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: p,
        onSwipeEnd: m,
        ...h
      } = e,
      g = yt(Ot, n),
      [_, ee] = B.useState(null),
      v = N(t, (e) => ee(e)),
      y = B.useRef(null),
      b = B.useRef(null),
      x = i || g.duration,
      S = B.useRef(0),
      C = B.useRef(x),
      w = B.useRef(0),
      { onToastAdd: te, onToastRemove: T } = g,
      E = le(() => {
        (_?.contains(document.activeElement) && g.viewport?.focus(), o());
      }),
      D = B.useCallback(
        (e) => {
          !e ||
            e === 1 / 0 ||
            (window.clearTimeout(w.current),
            (S.current = new Date().getTime()),
            (w.current = window.setTimeout(E, e)));
        },
        [E],
      );
    (B.useEffect(() => {
      let e = g.viewport;
      if (e) {
        let t = () => {
            (D(C.current), l?.());
          },
          n = () => {
            let e = new Date().getTime() - S.current;
            ((C.current -= e), window.clearTimeout(w.current), c?.());
          };
        return (
          e.addEventListener(Ct, n),
          e.addEventListener(wt, t),
          () => {
            (e.removeEventListener(Ct, n), e.removeEventListener(wt, t));
          }
        );
      }
    }, [g.viewport, x, c, l, D]),
      B.useEffect(() => {
        a && !g.isClosePausedRef.current && D(x);
      }, [a, x, g.isClosePausedRef, D]),
      B.useEffect(() => (te(), () => T()), [te, T]));
    let ne = B.useMemo(() => (_ ? qt(_) : null), [_]);
    return g.viewport
      ? (0, V.jsxs)(V.Fragment, {
          children: [
            ne &&
              (0, V.jsx)(Lt, {
                __scopeToast: n,
                role: `status`,
                "aria-live": r === `foreground` ? `assertive` : `polite`,
                children: ne,
              }),
            (0, V.jsx)(Pt, {
              scope: n,
              onClose: E,
              children: dt.createPortal(
                (0, V.jsx)(pt.ItemSlot, {
                  scope: n,
                  children: (0, V.jsx)(f, {
                    asChild: !0,
                    onEscapeKeyDown: L(s, () => {
                      (g.isFocusedToastEscapeKeyDownRef.current || E(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: (0, V.jsx)(I.li, {
                      tabIndex: 0,
                      "data-state": a ? `open` : `closed`,
                      "data-swipe-direction": g.swipeDirection,
                      ...h,
                      ref: v,
                      style: {
                        userSelect: `none`,
                        touchAction: `none`,
                        ...e.style,
                      },
                      onKeyDown: L(e.onKeyDown, (e) => {
                        e.key === `Escape` &&
                          (s?.(e.nativeEvent),
                          e.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            E()));
                      }),
                      onPointerDown: L(e.onPointerDown, (e) => {
                        e.button === 0 &&
                          (y.current = { x: e.clientX, y: e.clientY });
                      }),
                      onPointerMove: L(e.onPointerMove, (e) => {
                        if (!y.current) return;
                        let t = e.clientX - y.current.x,
                          n = e.clientY - y.current.y,
                          r = !!b.current,
                          i = [`left`, `right`].includes(g.swipeDirection),
                          a = [`left`, `up`].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          o = i ? a(0, t) : 0,
                          s = i ? 0 : a(0, n),
                          c = e.pointerType === `touch` ? 10 : 2,
                          l = { x: o, y: s },
                          f = { originalEvent: e, delta: l };
                        r
                          ? ((b.current = l), Jt(At, d, f, { discrete: !1 }))
                          : Yt(l, g.swipeDirection, c)
                            ? ((b.current = l),
                              Jt(kt, u, f, { discrete: !1 }),
                              e.target.setPointerCapture(e.pointerId))
                            : (Math.abs(t) > c || Math.abs(n) > c) &&
                              (y.current = null);
                      }),
                      onPointerUp: L(e.onPointerUp, (e) => {
                        let t = b.current,
                          n = e.target;
                        if (
                          (n.hasPointerCapture(e.pointerId) &&
                            n.releasePointerCapture(e.pointerId),
                          (b.current = null),
                          (y.current = null),
                          t)
                        ) {
                          let n = e.currentTarget,
                            r = { originalEvent: e, delta: t };
                          (Yt(t, g.swipeDirection, g.swipeThreshold)
                            ? Jt(Mt, m, r, { discrete: !0 })
                            : Jt(jt, p, r, { discrete: !0 }),
                            n.addEventListener(
                              `click`,
                              (e) => e.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Lt = (e) => {
    let { __scopeToast: t, children: n, ...r } = e,
      i = yt(Ot, t),
      [a, o] = B.useState(!1),
      [s, c] = B.useState(!1);
    return (
      Xt(() => o(!0)),
      B.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      s
        ? null
        : (0, V.jsx)(A, {
            asChild: !0,
            container: i.announcerContainer || void 0,
            children: (0, V.jsx)(y, {
              ...r,
              children:
                a && (0, V.jsxs)(V.Fragment, { children: [i.label, ` `, n] }),
            }),
          })
    );
  },
  Rt = `ToastTitle`,
  zt = B.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, V.jsx)(I.div, { ...r, ref: t });
  });
zt.displayName = Rt;
var Bt = `ToastDescription`,
  Vt = B.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, V.jsx)(I.div, { ...r, ref: t });
  });
Vt.displayName = Bt;
var Ht = `ToastAction`,
  Ut = B.forwardRef((e, t) => {
    let { altText: n, ...r } = e;
    return n.trim()
      ? (0, V.jsx)(Kt, {
          altText: n,
          asChild: !0,
          children: (0, V.jsx)(Gt, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Ht}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Ut.displayName = Ht;
var Wt = `ToastClose`,
  Gt = B.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e,
      i = Ft(Wt, n);
    return (0, V.jsx)(Kt, {
      asChild: !0,
      children: (0, V.jsx)(I.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: L(e.onClick, i.onClose),
      }),
    });
  });
Gt.displayName = Wt;
var Kt = B.forwardRef((e, t) => {
  let { __scopeToast: n, altText: r, ...i } = e;
  return (0, V.jsx)(I.div, {
    "data-radix-toast-announce-exclude": ``,
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function qt(e) {
  let t = [];
  return (
    Array.from(e.childNodes).forEach((e) => {
      if (
        (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent),
        Zt(e))
      ) {
        let n = e.ariaHidden || e.hidden || e.style.display === `none`,
          r = e.dataset.radixToastAnnounceExclude === ``;
        if (!n)
          if (r) {
            let n = e.dataset.radixToastAnnounceAlt;
            n && t.push(n);
          } else t.push(...qt(e));
      }
    }),
    t
  );
}
function Jt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? P(i, a) : i.dispatchEvent(a));
}
var Yt = (e, t, n = 0) => {
  let r = Math.abs(e.x),
    i = Math.abs(e.y),
    a = r > i;
  return t === `left` || t === `right` ? a && r > n : !a && i > n;
};
function Xt(e = () => {}) {
  let t = le(e);
  k(() => {
    let e = 0,
      n = 0;
    return (
      (e = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(e), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
function Zt(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Qt(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function $t(e) {
  let t = document.activeElement;
  return e.some((e) =>
    e === t ? !0 : (e.focus(), document.activeElement !== t),
  );
}
var en = bt,
  tn = Tt,
  nn = Nt,
  rn = zt,
  an = Vt,
  on = Ut,
  sn = Gt,
  cn = en,
  ln = B.forwardRef(({ className: e, ...t }, n) =>
    (0, V.jsx)(tn, {
      ref: n,
      className: R(
        `fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`,
        e,
      ),
      ...t,
    }),
  );
ln.displayName = tn.displayName;
var un = Ae(
    `group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
    {
      variants: {
        variant: {
          default: `border bg-background text-foreground`,
          destructive: `destructive group border-destructive bg-destructive text-destructive-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    },
  ),
  dn = B.forwardRef(({ className: e, variant: t, ...n }, r) =>
    (0, V.jsx)(nn, { ref: r, className: R(un({ variant: t }), e), ...n }),
  );
dn.displayName = nn.displayName;
var fn = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(on, {
    ref: n,
    className: R(
      `inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50`,
      e,
    ),
    ...t,
  }),
);
fn.displayName = on.displayName;
var pn = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(sn, {
    ref: n,
    className: R(
      `absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`,
      e,
    ),
    "toast-close": ``,
    ...t,
    children: (0, V.jsx)(Je, { className: `h-4 w-4` }),
  }),
);
pn.displayName = sn.displayName;
var mn = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(rn, { ref: n, className: R(`text-sm font-semibold`, e), ...t }),
);
mn.displayName = rn.displayName;
var hn = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(an, { ref: n, className: R(`text-sm opacity-90`, e), ...t }),
);
hn.displayName = an.displayName;
function gn() {
  let { toasts: e } = ut();
  return (0, V.jsxs)(cn, {
    children: [
      e.map(function ({ id: e, title: t, description: n, action: r, ...i }) {
        return (0, V.jsxs)(
          dn,
          {
            ...i,
            children: [
              (0, V.jsxs)(`div`, {
                className: `grid gap-1`,
                children: [
                  t && (0, V.jsx)(mn, { children: t }),
                  n && (0, V.jsx)(hn, { children: n }),
                ],
              }),
              r,
              (0, V.jsx)(pn, {}),
            ],
          },
          e,
        );
      }),
      (0, V.jsx)(ln, {}),
    ],
  });
}
var _n = [`light`, `dark`],
  vn = `(prefers-color-scheme: dark)`,
  yn = B.createContext(void 0),
  bn = { setTheme: (e) => {}, themes: [] },
  xn = () => B.useContext(yn) ?? bn;
B.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: a,
    value: o,
    attrs: s,
    nonce: c,
  }) => {
    let l = a === `system`,
      u =
        n === `class`
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map((e) => `'${e}'`).join(`,`)})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = i
        ? _n.includes(a) && a
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`
          : `if(e==='light'||e==='dark')d.style.colorScheme=e`
        : ``,
      f = (e, t = !1, r = !0) => {
        let a = o ? o[e] : e,
          s = t ? e + `|| ''` : `'${a}'`,
          c = ``;
        return (
          i &&
            r &&
            !t &&
            _n.includes(e) &&
            (c += `d.style.colorScheme = '${e}';`),
          n === `class`
            ? t || a
              ? (c += `c.add(${s})`)
              : (c += `null`)
            : a && (c += `d[s](n,${s})`),
          c
        );
      },
      p = e
        ? `!function(){${u}${f(e)}}()`
        : r
          ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${vn}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(`dark`)}}else{${f(`light`)}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ``}${f(o ? `x[e]` : `e`, !0)}}${l ? `` : `else{` + f(a, !1, !1) + `}`}${d}}catch(e){}}()`
          : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ``}${f(o ? `x[e]` : `e`, !0)}}else{${f(a, !1, !1)};}${d}}catch(t){}}();`;
    return B.createElement(`script`, {
      nonce: c,
      dangerouslySetInnerHTML: { __html: p },
    });
  },
);
var Sn = (e) => {
    switch (e) {
      case `success`:
        return Tn;
      case `info`:
        return Dn;
      case `warning`:
        return En;
      case `error`:
        return On;
      default:
        return null;
    }
  },
  Cn = Array(12).fill(0),
  wn = ({ visible: e, className: t }) =>
    B.createElement(
      `div`,
      {
        className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `),
        "data-visible": e,
      },
      B.createElement(
        `div`,
        { className: `sonner-spinner` },
        Cn.map((e, t) =>
          B.createElement(`div`, {
            className: `sonner-loading-bar`,
            key: `spinner-bar-${t}`,
          }),
        ),
      ),
    ),
  Tn = B.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    B.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      clipRule: `evenodd`,
    }),
  ),
  En = B.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    B.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
      clipRule: `evenodd`,
    }),
  ),
  Dn = B.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    B.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
      clipRule: `evenodd`,
    }),
  ),
  On = B.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    B.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
      clipRule: `evenodd`,
    }),
  ),
  kn = B.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    B.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
    B.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
  ),
  An = () => {
    let [e, t] = B.useState(document.hidden);
    return (
      B.useEffect(() => {
        let e = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener(`visibilitychange`, e),
          () => window.removeEventListener(`visibilitychange`, e)
        );
      }, []),
      e
    );
  },
  jn = 1,
  H = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : jn++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n,
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((e) => {
              this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) =>
          this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description:
                typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), B.isValidElement(e)))
                  ((i = !1),
                    this.create({ id: n, type: `default`, message: e }));
                else if (Nn(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: `error`,
                    message: r,
                    description: a,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r =
                      typeof t.success == `function`
                        ? await t.success(e)
                        : t.success,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description;
                  this.create({
                    id: n,
                    type: `success`,
                    message: r,
                    description: a,
                  });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r =
                      typeof t.error == `function` ? await t.error(e) : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(e)
                        : t.description;
                  this.create({
                    id: n,
                    type: `error`,
                    message: r,
                    description: a,
                  });
                }
              })
              .finally(() => {
                var e;
                (i && (this.dismiss(n), (n = void 0)),
                  (e = t.finally) == null || e.call(t));
              }),
            s = () =>
              new Promise((e, t) =>
                o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t),
              );
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: s }
            : Object.assign(n, { unwrap: s });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || jn++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  Mn = (e, t) => {
    let n = t?.id || jn++;
    return (H.addToast({ title: e, ...t, id: n }), n);
  },
  Nn = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  Pn = Object.assign(
    Mn,
    {
      success: H.success,
      info: H.info,
      warning: H.warning,
      error: H.error,
      custom: H.custom,
      message: H.message,
      promise: H.promise,
      dismiss: H.dismiss,
      loading: H.loading,
    },
    { getHistory: () => H.toasts, getToasts: () => H.getActiveToasts() },
  );
function Fn(e, { insertAt: t } = {}) {
  if (!e || typeof document > `u`) return;
  let n = document.head || document.getElementsByTagName(`head`)[0],
    r = document.createElement(`style`);
  ((r.type = `text/css`),
    t === `top` && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
Fn(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function In(e) {
  return e.label !== void 0;
}
var Ln = 3,
  Rn = `32px`,
  zn = `16px`,
  Bn = 4e3,
  Vn = 356,
  Hn = 14,
  Un = 20,
  Wn = 200;
function U(...e) {
  return e.filter(Boolean).join(` `);
}
function Gn(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var Kn = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: f,
      closeButton: p,
      style: m,
      cancelButtonStyle: h,
      actionButtonStyle: g,
      className: _ = ``,
      descriptionClassName: ee = ``,
      duration: v,
      position: y,
      gap: b,
      loadingIcon: x,
      expandByDefault: S,
      classNames: C,
      icons: w,
      closeButtonAriaLabel: te = `Close toast`,
      pauseWhenPageIsHidden: T,
    } = e,
    [E, D] = B.useState(null),
    [ne, O] = B.useState(null),
    [k, A] = B.useState(!1),
    [re, j] = B.useState(!1),
    [ie, ae] = B.useState(!1),
    [oe, M] = B.useState(!1),
    [se, ce] = B.useState(!1),
    [le, ue] = B.useState(0),
    [de, fe] = B.useState(0),
    pe = B.useRef(n.duration || v || Bn),
    me = B.useRef(null),
    he = B.useRef(null),
    N = c === 0,
    ge = c + 1 <= o,
    P = n.type,
    F = n.dismissible !== !1,
    _e = n.className || ``,
    ve = n.descriptionClassName || ``,
    ye = B.useMemo(
      () => s.findIndex((e) => e.toastId === n.id) || 0,
      [s, n.id],
    ),
    be = B.useMemo(() => n.closeButton ?? p, [n.closeButton, p]),
    xe = B.useMemo(() => n.duration || v || Bn, [n.duration, v]),
    Se = B.useRef(0),
    I = B.useRef(0),
    Ce = B.useRef(0),
    L = B.useRef(null),
    [we, Te] = y.split(`-`),
    Ee = B.useMemo(
      () => s.reduce((e, t, n) => (n >= ye ? e : e + t.height), 0),
      [s, ye],
    ),
    De = An(),
    Oe = n.invert || t,
    R = P === `loading`;
  ((I.current = B.useMemo(() => ye * b + Ee, [ye, Ee])),
    B.useEffect(() => {
      pe.current = xe;
    }, [xe]),
    B.useEffect(() => {
      A(!0);
    }, []),
    B.useEffect(() => {
      let e = he.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          fe(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    B.useLayoutEffect(() => {
      if (!k) return;
      let e = he.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        fe(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e],
        ));
    }, [k, n.title, n.description, a, n.id]));
  let z = B.useCallback(() => {
    (j(!0),
      ue(I.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, Wn));
  }, [n, d, a, I]);
  (B.useEffect(() => {
    if (
      (n.promise && P === `loading`) ||
      n.duration === 1 / 0 ||
      n.type === `loading`
    )
      return;
    let e;
    return (
      u || i || (T && De)
        ? (() => {
            if (Ce.current < Se.current) {
              let e = new Date().getTime() - Se.current;
              pe.current -= e;
            }
            Ce.current = new Date().getTime();
          })()
        : pe.current !== 1 / 0 &&
          ((Se.current = new Date().getTime()),
          (e = setTimeout(() => {
            var e;
            ((e = n.onAutoClose) == null || e.call(n, n), z());
          }, pe.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, P, T, De, z]),
    B.useEffect(() => {
      n.delete && z();
    }, [z, n.delete]));
  function ke() {
    return w != null && w.loading
      ? B.createElement(
          `div`,
          {
            className: U(C?.loader, n?.classNames?.loader, `sonner-loader`),
            "data-visible": P === `loading`,
          },
          w.loading,
        )
      : x
        ? B.createElement(
            `div`,
            {
              className: U(C?.loader, n?.classNames?.loader, `sonner-loader`),
              "data-visible": P === `loading`,
            },
            x,
          )
        : B.createElement(wn, {
            className: U(C?.loader, n?.classNames?.loader),
            visible: P === `loading`,
          });
  }
  return B.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: he,
      className: U(
        _,
        _e,
        C?.toast,
        n?.classNames?.toast,
        C?.default,
        C?.[P],
        n?.classNames?.[P],
      ),
      "data-sonner-toast": ``,
      "data-rich-colors": n.richColors ?? f,
      "data-styled": !(n.jsx || n.unstyled || r),
      "data-mounted": k,
      "data-promise": !!n.promise,
      "data-swiped": se,
      "data-removed": re,
      "data-visible": ge,
      "data-y-position": we,
      "data-x-position": Te,
      "data-index": c,
      "data-front": N,
      "data-swiping": ie,
      "data-dismissible": F,
      "data-type": P,
      "data-invert": Oe,
      "data-swipe-out": oe,
      "data-swipe-direction": ne,
      "data-expanded": !!(u || (S && k)),
      style: {
        "--index": c,
        "--toasts-before": c,
        "--z-index": l.length - c,
        "--offset": `${re ? le : I.current}px`,
        "--initial-height": S ? `auto` : `${de}px`,
        ...m,
        ...n.style,
      },
      onDragEnd: () => {
        (ae(!1), D(null), (L.current = null));
      },
      onPointerDown: (e) => {
        R ||
          !F ||
          ((me.current = new Date()),
          ue(I.current),
          e.target.setPointerCapture(e.pointerId),
          e.target.tagName !== `BUTTON` &&
            (ae(!0), (L.current = { x: e.clientX, y: e.clientY })));
      },
      onPointerUp: () => {
        var e;
        if (oe || !F) return;
        L.current = null;
        let t = Number(
            he.current?.style
              .getPropertyValue(`--swipe-amount-x`)
              .replace(`px`, ``) || 0,
          ),
          r = Number(
            he.current?.style
              .getPropertyValue(`--swipe-amount-y`)
              .replace(`px`, ``) || 0,
          ),
          i = new Date().getTime() - me.current?.getTime(),
          a = E === `x` ? t : r,
          o = Math.abs(a) / i;
        if (Math.abs(a) >= Un || o > 0.11) {
          (ue(I.current),
            (e = n.onDismiss) == null || e.call(n, n),
            O(E === `x` ? (t > 0 ? `right` : `left`) : r > 0 ? `down` : `up`),
            z(),
            M(!0),
            ce(!1));
          return;
        }
        (ae(!1), D(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!L.current || !F || window.getSelection()?.toString().length > 0)
          return;
        let i = t.clientY - L.current.y,
          a = t.clientX - L.current.x,
          o = e.swipeDirections ?? Gn(y);
        !E &&
          (Math.abs(a) > 1 || Math.abs(i) > 1) &&
          D(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 };
        (E === `y`
          ? (o.includes(`top`) || o.includes(`bottom`)) &&
            ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0)) &&
            (s.y = i)
          : E === `x` &&
            (o.includes(`left`) || o.includes(`right`)) &&
            ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0)) &&
            (s.x = a),
          (Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && ce(!0),
          (n = he.current) == null ||
            n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = he.current) == null ||
            r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    be && !n.jsx
      ? B.createElement(
          `button`,
          {
            "aria-label": te,
            "data-disabled": R,
            "data-close-button": !0,
            onClick:
              R || !F
                ? () => {}
                : () => {
                    var e;
                    (z(), (e = n.onDismiss) == null || e.call(n, n));
                  },
            className: U(C?.closeButton, n?.classNames?.closeButton),
          },
          w?.close ?? kn,
        )
      : null,
    n.jsx || (0, B.isValidElement)(n.title)
      ? n.jsx
        ? n.jsx
        : typeof n.title == `function`
          ? n.title()
          : n.title
      : B.createElement(
          B.Fragment,
          null,
          P || n.icon || n.promise
            ? B.createElement(
                `div`,
                { "data-icon": ``, className: U(C?.icon, n?.classNames?.icon) },
                n.promise || (n.type === `loading` && !n.icon)
                  ? n.icon || ke()
                  : null,
                n.type === `loading` ? null : n.icon || w?.[P] || Sn(P),
              )
            : null,
          B.createElement(
            `div`,
            {
              "data-content": ``,
              className: U(C?.content, n?.classNames?.content),
            },
            B.createElement(
              `div`,
              {
                "data-title": ``,
                className: U(C?.title, n?.classNames?.title),
              },
              typeof n.title == `function` ? n.title() : n.title,
            ),
            n.description
              ? B.createElement(
                  `div`,
                  {
                    "data-description": ``,
                    className: U(
                      ee,
                      ve,
                      C?.description,
                      n?.classNames?.description,
                    ),
                  },
                  typeof n.description == `function`
                    ? n.description()
                    : n.description,
                )
              : null,
          ),
          (0, B.isValidElement)(n.cancel)
            ? n.cancel
            : n.cancel && In(n.cancel)
              ? B.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: n.cancelButtonStyle || h,
                    onClick: (e) => {
                      var t, r;
                      In(n.cancel) &&
                        F &&
                        ((r = (t = n.cancel).onClick) == null || r.call(t, e),
                        z());
                    },
                    className: U(C?.cancelButton, n?.classNames?.cancelButton),
                  },
                  n.cancel.label,
                )
              : null,
          (0, B.isValidElement)(n.action)
            ? n.action
            : n.action && In(n.action)
              ? B.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: n.actionButtonStyle || g,
                    onClick: (e) => {
                      var t, r;
                      In(n.action) &&
                        ((r = (t = n.action).onClick) == null || r.call(t, e),
                        !e.defaultPrevented && z());
                    },
                    className: U(C?.actionButton, n?.classNames?.actionButton),
                  },
                  n.action.label,
                )
              : null,
        ),
  );
};
function qn() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Jn(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? zn : Rn;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] =
                    typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var Yn = (0, B.forwardRef)(function (e, t) {
    let {
        invert: n,
        position: r = `bottom-right`,
        hotkey: i = [`altKey`, `KeyT`],
        expand: a,
        closeButton: o,
        className: s,
        offset: c,
        mobileOffset: l,
        theme: u = `light`,
        richColors: d,
        duration: f,
        style: p,
        visibleToasts: m = Ln,
        toastOptions: h,
        dir: g = qn(),
        gap: _ = Hn,
        loadingIcon: ee,
        icons: v,
        containerAriaLabel: y = `Notifications`,
        pauseWhenPageIsHidden: b,
      } = e,
      [x, S] = B.useState([]),
      C = B.useMemo(
        () =>
          Array.from(
            new Set(
              [r].concat(x.filter((e) => e.position).map((e) => e.position)),
            ),
          ),
        [x, r],
      ),
      [w, te] = B.useState([]),
      [T, E] = B.useState(!1),
      [D, ne] = B.useState(!1),
      [O, k] = B.useState(
        u === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : u,
      ),
      A = B.useRef(null),
      re = i.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      j = B.useRef(null),
      ie = B.useRef(!1),
      ae = B.useCallback((e) => {
        S((t) => {
          var n;
          return (
            ((n = t.find((t) => t.id === e.id)) != null && n.delete) ||
              H.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          );
        });
      }, []);
    return (
      B.useEffect(
        () =>
          H.subscribe((e) => {
            if (e.dismiss) {
              S((t) =>
                t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
              );
              return;
            }
            setTimeout(() => {
              dt.flushSync(() => {
                S((t) => {
                  let n = t.findIndex((t) => t.id === e.id);
                  return n === -1
                    ? [e, ...t]
                    : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
                });
              });
            });
          }),
        [],
      ),
      B.useEffect(() => {
        if (u !== `system`) {
          k(u);
          return;
        }
        if (
          (u === `system` &&
            (window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? k(`dark`)
              : k(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            k(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              k(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [u]),
      B.useEffect(() => {
        x.length <= 1 && E(!1);
      }, [x]),
      B.useEffect(() => {
        let e = (e) => {
          var t, n;
          (i.every((t) => e[t] || e.code === t) &&
            (E(!0), (t = A.current) == null || t.focus()),
            e.code === `Escape` &&
              (document.activeElement === A.current ||
                ((n = A.current) != null &&
                  n.contains(document.activeElement))) &&
              E(!1));
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [i]),
      B.useEffect(() => {
        if (A.current)
          return () => {
            j.current &&
              (j.current.focus({ preventScroll: !0 }),
              (j.current = null),
              (ie.current = !1));
          };
      }, [A.current]),
      B.createElement(
        `section`,
        {
          ref: t,
          "aria-label": `${y} ${re}`,
          tabIndex: -1,
          "aria-live": `polite`,
          "aria-relevant": `additions text`,
          "aria-atomic": `false`,
          suppressHydrationWarning: !0,
        },
        C.map((t, r) => {
          let [i, u] = t.split(`-`);
          return x.length
            ? B.createElement(
                `ol`,
                {
                  key: t,
                  dir: g === `auto` ? qn() : g,
                  tabIndex: -1,
                  ref: A,
                  className: s,
                  "data-sonner-toaster": !0,
                  "data-theme": O,
                  "data-y-position": i,
                  "data-lifted": T && x.length > 1 && !a,
                  "data-x-position": u,
                  style: {
                    "--front-toast-height": `${w[0]?.height || 0}px`,
                    "--width": `${Vn}px`,
                    "--gap": `${_}px`,
                    ...p,
                    ...Jn(c, l),
                  },
                  onBlur: (e) => {
                    ie.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((ie.current = !1),
                      (j.current &&=
                        (j.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      ie.current ||
                      ((ie.current = !0), (j.current = e.relatedTarget));
                  },
                  onMouseEnter: () => E(!0),
                  onMouseMove: () => E(!0),
                  onMouseLeave: () => {
                    D || E(!1);
                  },
                  onDragEnd: () => E(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement &&
                      e.target.dataset.dismissible === `false`) ||
                      ne(!0);
                  },
                  onPointerUp: () => ne(!1),
                },
                x
                  .filter((e) => (!e.position && r === 0) || e.position === t)
                  .map((r, i) =>
                    B.createElement(Kn, {
                      key: r.id,
                      icons: v,
                      index: i,
                      toast: r,
                      defaultRichColors: d,
                      duration: h?.duration ?? f,
                      className: h?.className,
                      descriptionClassName: h?.descriptionClassName,
                      invert: n,
                      visibleToasts: m,
                      closeButton: h?.closeButton ?? o,
                      interacting: D,
                      position: t,
                      style: h?.style,
                      unstyled: h?.unstyled,
                      classNames: h?.classNames,
                      cancelButtonStyle: h?.cancelButtonStyle,
                      actionButtonStyle: h?.actionButtonStyle,
                      removeToast: ae,
                      toasts: x.filter((e) => e.position == r.position),
                      heights: w.filter((e) => e.position == r.position),
                      setHeights: te,
                      expandByDefault: a,
                      gap: _,
                      loadingIcon: ee,
                      expanded: T,
                      pauseWhenPageIsHidden: b,
                      swipeDirections: e.swipeDirections,
                    }),
                  ),
              )
            : null;
        }),
      )
    );
  }),
  Xn = ({ ...e }) => {
    let { theme: t = `system` } = xn();
    return (0, V.jsx)(Yn, {
      theme: t,
      className: `toaster group`,
      toastOptions: {
        classNames: {
          toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
          description: `group-[.toast]:text-muted-foreground`,
          actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
          cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
        },
      },
      ...e,
    });
  },
  [Zn, Qn] = Se(`Tooltip`, [D]),
  $n = D(),
  er = `TooltipProvider`,
  tr = 700,
  nr = `tooltip.open`,
  [rr, ir] = Zn(er),
  ar = (e) => {
    let {
        __scopeTooltip: t,
        delayDuration: n = tr,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: a,
      } = e,
      o = B.useRef(!0),
      s = B.useRef(!1),
      c = B.useRef(0);
    return (
      B.useEffect(() => {
        let e = c.current;
        return () => window.clearTimeout(e);
      }, []),
      (0, V.jsx)(rr, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: B.useCallback(() => {
          r <= 0 || (window.clearTimeout(c.current), (o.current = !1));
        }, [r]),
        onClose: B.useCallback(() => {
          r <= 0 ||
            (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: B.useCallback((e) => {
          s.current = e;
        }, []),
        disableHoverableContent: i,
        children: a,
      })
    );
  };
ar.displayName = er;
var or = `Tooltip`,
  [sr, cr] = Zn(or),
  lr = (e) => {
    let {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        disableHoverableContent: o,
        delayDuration: s,
      } = e,
      c = ir(or, e.__scopeTooltip),
      l = $n(t),
      [u, d] = B.useState(null),
      f = O(),
      p = B.useRef(0),
      m = o ?? c.disableHoverableContent,
      h = s ?? c.delayDuration,
      g = B.useRef(!1),
      [ee, v] = ye({
        prop: r,
        defaultProp: i ?? !1,
        onChange: (e) => {
          (e
            ? (c.onOpen(), document.dispatchEvent(new CustomEvent(nr)))
            : c.onClose(),
            a?.(e));
        },
        caller: or,
      }),
      y = B.useMemo(
        () => (ee ? (g.current ? `delayed-open` : `instant-open`) : `closed`),
        [ee],
      ),
      b = B.useCallback(() => {
        (window.clearTimeout(p.current),
          (p.current = 0),
          (g.current = !1),
          v(!0));
      }, [v]),
      x = B.useCallback(() => {
        (window.clearTimeout(p.current), (p.current = 0), v(!1));
      }, [v]),
      S = B.useCallback(() => {
        (window.clearTimeout(p.current),
          (p.current = window.setTimeout(() => {
            ((g.current = !0), v(!0), (p.current = 0));
          }, h)));
      }, [h, v]);
    return (
      B.useEffect(
        () => () => {
          p.current &&= (window.clearTimeout(p.current), 0);
        },
        [],
      ),
      (0, V.jsx)(_, {
        ...l,
        children: (0, V.jsx)(sr, {
          scope: t,
          contentId: f,
          open: ee,
          stateAttribute: y,
          trigger: u,
          onTriggerChange: d,
          onTriggerEnter: B.useCallback(() => {
            c.isOpenDelayedRef.current ? S() : b();
          }, [c.isOpenDelayedRef, S, b]),
          onTriggerLeave: B.useCallback(() => {
            m ? x() : (window.clearTimeout(p.current), (p.current = 0));
          }, [x, m]),
          onOpen: b,
          onClose: x,
          disableHoverableContent: m,
          children: n,
        }),
      })
    );
  };
lr.displayName = or;
var ur = `TooltipTrigger`,
  dr = B.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...r } = e,
      i = cr(ur, n),
      a = ir(ur, n),
      o = $n(n),
      s = N(t, B.useRef(null), i.onTriggerChange),
      c = B.useRef(!1),
      l = B.useRef(!1),
      u = B.useCallback(() => (c.current = !1), []);
    return (
      B.useEffect(
        () => () => document.removeEventListener(`pointerup`, u),
        [u],
      ),
      (0, V.jsx)(Oe, {
        asChild: !0,
        ...o,
        children: (0, V.jsx)(I.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...r,
          ref: s,
          onPointerMove: L(e.onPointerMove, (e) => {
            e.pointerType !== `touch` &&
              !l.current &&
              !a.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (l.current = !0));
          }),
          onPointerLeave: L(e.onPointerLeave, () => {
            (i.onTriggerLeave(), (l.current = !1));
          }),
          onPointerDown: L(e.onPointerDown, () => {
            (i.open && i.onClose(),
              (c.current = !0),
              document.addEventListener(`pointerup`, u, { once: !0 }));
          }),
          onFocus: L(e.onFocus, () => {
            c.current || i.onOpen();
          }),
          onBlur: L(e.onBlur, i.onClose),
          onClick: L(e.onClick, i.onClose),
        }),
      })
    );
  });
dr.displayName = ur;
var fr = `TooltipPortal`,
  [pr, mr] = Zn(fr, { forceMount: void 0 }),
  hr = (e) => {
    let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
      a = cr(fr, t);
    return (0, V.jsx)(pr, {
      scope: t,
      forceMount: n,
      children: (0, V.jsx)(v, {
        present: n || a.open,
        children: (0, V.jsx)(A, { asChild: !0, container: i, children: r }),
      }),
    });
  };
hr.displayName = fr;
var gr = `TooltipContent`,
  _r = B.forwardRef((e, t) => {
    let n = mr(gr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
      o = cr(gr, e.__scopeTooltip);
    return (0, V.jsx)(v, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? (0, V.jsx)(Sr, { side: i, ...a, ref: t })
        : (0, V.jsx)(vr, { side: i, ...a, ref: t }),
    });
  }),
  vr = B.forwardRef((e, t) => {
    let n = cr(gr, e.__scopeTooltip),
      r = ir(gr, e.__scopeTooltip),
      i = B.useRef(null),
      a = N(t, i),
      [o, s] = B.useState(null),
      { trigger: c, onClose: l } = n,
      u = i.current,
      { onPointerInTransitChange: d } = r,
      f = B.useCallback(() => {
        (s(null), d(!1));
      }, [d]),
      p = B.useCallback(
        (e, t) => {
          let n = e.currentTarget,
            r = { x: e.clientX, y: e.clientY },
            i = Er(r, Tr(r, n.getBoundingClientRect())),
            a = Dr(t.getBoundingClientRect());
          (s(kr([...i, ...a])), d(!0));
        },
        [d],
      );
    return (
      B.useEffect(() => () => f(), [f]),
      B.useEffect(() => {
        if (c && u) {
          let e = (e) => p(e, u),
            t = (e) => p(e, c);
          return (
            c.addEventListener(`pointerleave`, e),
            u.addEventListener(`pointerleave`, t),
            () => {
              (c.removeEventListener(`pointerleave`, e),
                u.removeEventListener(`pointerleave`, t));
            }
          );
        }
      }, [c, u, p, f]),
      B.useEffect(() => {
        if (o) {
          let e = (e) => {
            let t = e.target,
              n = { x: e.clientX, y: e.clientY },
              r = c?.contains(t) || u?.contains(t),
              i = !Or(n, o);
            r ? f() : i && (f(), l());
          };
          return (
            document.addEventListener(`pointermove`, e),
            () => document.removeEventListener(`pointermove`, e)
          );
        }
      }, [c, u, o, l, f]),
      (0, V.jsx)(Sr, { ...e, ref: a })
    );
  }),
  [yr, br] = Zn(or, { isInside: !1 }),
  xr = _e(`TooltipContent`),
  Sr = B.forwardRef((e, t) => {
    let {
        __scopeTooltip: n,
        children: r,
        "aria-label": i,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        ...s
      } = e,
      c = cr(gr, n),
      l = $n(n),
      { onClose: u } = c;
    return (
      B.useEffect(
        () => (
          document.addEventListener(nr, u),
          () => document.removeEventListener(nr, u)
        ),
        [u],
      ),
      B.useEffect(() => {
        if (c.trigger) {
          let e = (e) => {
            e.target instanceof Node && e.target.contains(c.trigger) && u();
          };
          return (
            window.addEventListener(`scroll`, e, { capture: !0 }),
            () => window.removeEventListener(`scroll`, e, { capture: !0 })
          );
        }
      }, [c.trigger, u]),
      (0, V.jsx)(w, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        onFocusOutside: (e) => e.preventDefault(),
        onDismiss: u,
        children: (0, V.jsxs)(ne, {
          "data-state": c.stateAttribute,
          ...l,
          ...s,
          ref: t,
          style: {
            ...s.style,
            "--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`,
            "--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`,
            "--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`,
            "--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`,
            "--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)`,
          },
          children: [
            (0, V.jsx)(xr, { children: r }),
            (0, V.jsx)(yr, {
              scope: n,
              isInside: !0,
              children: (0, V.jsx)(g, {
                id: c.contentId,
                role: `tooltip`,
                children: i || r,
              }),
            }),
          ],
        }),
      })
    );
  });
_r.displayName = gr;
var Cr = `TooltipArrow`,
  wr = B.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...r } = e,
      i = $n(n);
    return br(Cr, n).isInside ? null : (0, V.jsx)(p, { ...i, ...r, ref: t });
  });
wr.displayName = Cr;
function Tr(e, t) {
  let n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, a)) {
    case a:
      return `left`;
    case i:
      return `right`;
    case n:
      return `top`;
    case r:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function Er(e, t, n = 5) {
  let r = [];
  switch (t) {
    case `top`:
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case `bottom`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case `left`:
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case `right`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Dr(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Or(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
function kr(e) {
  let t = e.slice();
  return (
    t.sort((e, t) =>
      e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y),
    ),
    Ar(t)
  );
}
function Ar(e) {
  if (e.length <= 1) return e.slice();
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (; t.length >= 2; ) {
      let e = t[t.length - 1],
        n = t[t.length - 2];
      if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  let n = [];
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    for (; n.length >= 2; ) {
      let e = n[n.length - 1],
        t = n[n.length - 2];
      if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var jr = ar,
  Mr = _r,
  Nr = jr,
  Pr = B.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    (0, V.jsx)(Mr, {
      ref: r,
      sideOffset: t,
      className: R(
        `z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        e,
      ),
      ...n,
    }),
  );
Pr.displayName = Mr.displayName;
var Fr = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ir = new (class extends Fr {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  Lr = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Rr = new (class {
    #e = Lr;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function zr(e) {
  setTimeout(e, 0);
}
var Br = typeof window > `u` || `Deno` in globalThis;
function W() {}
function Vr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Hr(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Ur(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Wr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Gr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Kr(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Jr(o, t.options)) return !1;
    } else if (!Xr(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function qr(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Yr(t.options.mutationKey) !== Yr(a)) return !1;
    } else if (!Xr(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Jr(e, t) {
  return (t?.queryKeyHashFn || Yr)(e);
}
function Yr(e) {
  return JSON.stringify(e, (e, t) =>
    ei(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Xr(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t &&
        e &&
        t &&
        typeof e == `object` &&
        typeof t == `object`
      ? Object.keys(t).every((n) => Xr(e[n], t[n]))
      : !1;
}
var Zr = Object.prototype.hasOwnProperty;
function Qr(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = $r(e) && $r(t);
  if (!r && !(ei(e) && ei(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : Zr.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = Qr(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function $r(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ei(e) {
  if (!ti(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !ti(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function ti(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ni(e) {
  return new Promise((t) => {
    Rr.setTimeout(t, e);
  });
}
function ri(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : Qr(e, t);
}
function ii(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function ai(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var oi = Symbol();
function si(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === oi
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function ci(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var li = (() => {
  let e = () => Br;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function ui() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var di = zr;
function fi() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = di,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var G = fi(),
  pi = new (class extends Fr {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function mi(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function hi(e) {
  return (e ?? `online`) === `online` ? pi.isOnline() : !0;
}
var gi = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function _i(e) {
  let t = !1,
    n = 0,
    r,
    i = ui(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new gi(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      Ir.isFocused() &&
      (e.networkMode === `always` || pi.isOnline()) &&
      e.canRun(),
    u = () => hi(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (li.isServer() ? 0 : 3),
            o = e.retryDelay ?? mi,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            ni(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var vi = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      Hr(this.gcTime) &&
        (this.#e = Rr.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (li.isServer() ? 1 / 0 : 300 * 1e3),
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Rr.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function yi(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              ci(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = si(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = await u(
                  (() => {
                    let e = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: i ? `backward` : `forward`,
                      meta: t.options.meta,
                    };
                    return (l(e), e);
                  })(),
                ),
                { maxPages: o } = t.options,
                s = i ? ai : ii;
              return {
                pages: s(e.pages, a, o),
                pageParams: s(e.pageParams, r, o),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? xi : bi,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : bi(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            ))
        : (t.fetchFn = l);
    },
  };
}
function bi(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function xi(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Si = class extends vi {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Ti(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Ti(this.options);
      e.data !== void 0 &&
        (this.setState(wi(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = ri(this.state.data, e, this.options);
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(W).catch(W) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => Gr(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === oi || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => Wr(e.options.staleTime, this) === `static`)
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !Ur(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = si(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? yi(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = _i({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof gi &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof gi) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...Ci(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...wi(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      G.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function Ci(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: hi(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function wi(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Ti(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Ei = class extends vi {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Di()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = _i({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      G.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function Di() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Oi = class extends Fr {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Ei({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = ki(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = ki(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = ki(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = ki(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    G.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => qr(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => qr(e, t));
  }
  notify(e) {
    G.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return G.batch(() => Promise.all(e.map((e) => e.continue().catch(W))));
  }
};
function ki(e) {
  return e.options.scope?.id;
}
var Ai = class extends Fr {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Jr(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new Si({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      G.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Kr(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Kr(e, t)) : t;
    }
    notify(e) {
      G.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      G.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      G.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  ji = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Ai()),
        (this.#t = e.mutationCache || new Oi()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = Ir.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = pi.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(Wr(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Vr(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return G.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      G.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return G.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = G.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(W).catch(W);
    }
    invalidateQueries(e, t = {}) {
      return G.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = G.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(W)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(W);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Wr(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(W).catch(W);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(W).catch(W);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return pi.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Yr(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Xr(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Yr(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Xr(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= Jr(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === oi && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Mi = B.createContext(void 0),
  Ni = ({ client: e, children: t }) => (
    B.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, V.jsx)(Mi.Provider, { value: e, children: t })
  ),
  Pi = [`Enter`, ` `],
  Fi = [`ArrowDown`, `PageUp`, `Home`],
  Ii = [`ArrowUp`, `PageDown`, `End`],
  Li = [...Fi, ...Ii],
  Ri = { ltr: [...Pi, `ArrowRight`], rtl: [...Pi, `ArrowLeft`] },
  zi = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] },
  Bi = `Menu`,
  [Vi, Hi, Ui] = be(Bi),
  [Wi, Gi] = Se(Bi, [Ui, D, h]),
  Ki = D(),
  qi = h(),
  [Ji, Yi] = Wi(Bi),
  [Xi, Zi] = Wi(Bi),
  Qi = (e) => {
    let {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = Ki(t),
      [c, l] = B.useState(null),
      u = B.useRef(!1),
      d = le(a),
      f = te(i);
    return (
      B.useEffect(() => {
        let e = () => {
            ((u.current = !0),
              document.addEventListener(`pointerdown`, t, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener(`pointermove`, t, {
                capture: !0,
                once: !0,
              }));
          },
          t = () => (u.current = !1);
        return (
          document.addEventListener(`keydown`, e, { capture: !0 }),
          () => {
            (document.removeEventListener(`keydown`, e, { capture: !0 }),
              document.removeEventListener(`pointerdown`, t, { capture: !0 }),
              document.removeEventListener(`pointermove`, t, { capture: !0 }));
          }
        );
      }, []),
      (0, V.jsx)(_, {
        ...s,
        children: (0, V.jsx)(Ji, {
          scope: t,
          open: n,
          onOpenChange: d,
          content: c,
          onContentChange: l,
          children: (0, V.jsx)(Xi, {
            scope: t,
            onClose: B.useCallback(() => d(!1), [d]),
            isUsingKeyboardRef: u,
            dir: f,
            modal: o,
            children: r,
          }),
        }),
      })
    );
  };
Qi.displayName = Bi;
var $i = `MenuAnchor`,
  ea = B.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e,
      i = Ki(n);
    return (0, V.jsx)(Oe, { ...i, ...r, ref: t });
  });
ea.displayName = $i;
var ta = `MenuPortal`,
  [na, ra] = Wi(ta, { forceMount: void 0 }),
  ia = (e) => {
    let { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
      a = Yi(ta, t);
    return (0, V.jsx)(na, {
      scope: t,
      forceMount: n,
      children: (0, V.jsx)(v, {
        present: n || a.open,
        children: (0, V.jsx)(A, { asChild: !0, container: i, children: r }),
      }),
    });
  };
ia.displayName = ta;
var K = `MenuContent`,
  [aa, oa] = Wi(K),
  sa = B.forwardRef((e, t) => {
    let n = ra(K, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...i } = e,
      a = Yi(K, e.__scopeMenu),
      o = Zi(K, e.__scopeMenu);
    return (0, V.jsx)(Vi.Provider, {
      scope: e.__scopeMenu,
      children: (0, V.jsx)(v, {
        present: r || a.open,
        children: (0, V.jsx)(Vi.Slot, {
          scope: e.__scopeMenu,
          children: o.modal
            ? (0, V.jsx)(ca, { ...i, ref: t })
            : (0, V.jsx)(la, { ...i, ref: t }),
        }),
      }),
    });
  }),
  ca = B.forwardRef((e, t) => {
    let n = Yi(K, e.__scopeMenu),
      r = B.useRef(null),
      i = N(t, r);
    return (
      B.useEffect(() => {
        let e = r.current;
        if (e) return x(e);
      }, []),
      (0, V.jsx)(da, {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: L(e.onFocusOutside, (e) => e.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  la = B.forwardRef((e, t) => {
    let n = Yi(K, e.__scopeMenu);
    return (0, V.jsx)(da, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  ua = ae(`MenuContent.ScrollLock`),
  da = B.forwardRef((e, t) => {
    let {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: i,
        onOpenAutoFocus: a,
        onCloseAutoFocus: o,
        disableOutsidePointerEvents: s,
        onEntryFocus: c,
        onEscapeKeyDown: l,
        onPointerDownOutside: u,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: p,
        disableOutsideScroll: m,
        ...h
      } = e,
      g = Yi(K, n),
      _ = Zi(K, n),
      v = Ki(n),
      y = qi(n),
      x = Hi(n),
      [S, te] = B.useState(null),
      T = B.useRef(null),
      E = N(t, T, g.onContentChange),
      D = B.useRef(0),
      O = B.useRef(``),
      k = B.useRef(0),
      A = B.useRef(null),
      re = B.useRef(`right`),
      j = B.useRef(0),
      ie = m ? pe : B.Fragment,
      ae = m ? { as: ua, allowPinchZoom: !0 } : void 0,
      oe = (e) => {
        let t = O.current + e,
          n = x().filter((e) => !e.disabled),
          r = document.activeElement,
          i = n.find((e) => e.ref.current === r)?.textValue,
          a = Ya(
            n.map((e) => e.textValue),
            t,
            i,
          ),
          o = n.find((e) => e.textValue === a)?.ref.current;
        ((function e(t) {
          ((O.current = t),
            window.clearTimeout(D.current),
            t !== `` && (D.current = window.setTimeout(() => e(``), 1e3)));
        })(t),
          o && setTimeout(() => o.focus()));
      };
    (B.useEffect(() => () => window.clearTimeout(D.current), []), b());
    let M = B.useCallback(
      (e) => re.current === A.current?.side && Za(e, A.current?.area),
      [],
    );
    return (0, V.jsx)(aa, {
      scope: n,
      searchRef: O,
      onItemEnter: B.useCallback(
        (e) => {
          M(e) && e.preventDefault();
        },
        [M],
      ),
      onItemLeave: B.useCallback(
        (e) => {
          M(e) || (T.current?.focus(), te(null));
        },
        [M],
      ),
      onTriggerLeave: B.useCallback(
        (e) => {
          M(e) && e.preventDefault();
        },
        [M],
      ),
      pointerGraceTimerRef: k,
      onPointerGraceIntentChange: B.useCallback((e) => {
        A.current = e;
      }, []),
      children: (0, V.jsx)(ie, {
        ...ae,
        children: (0, V.jsx)(ee, {
          asChild: !0,
          trapped: i,
          onMountAutoFocus: L(a, (e) => {
            (e.preventDefault(), T.current?.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: o,
          children: (0, V.jsx)(w, {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: l,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onInteractOutside: f,
            onDismiss: p,
            children: (0, V.jsx)(C, {
              asChild: !0,
              ...y,
              dir: _.dir,
              orientation: `vertical`,
              loop: r,
              currentTabStopId: S,
              onCurrentTabStopIdChange: te,
              onEntryFocus: L(c, (e) => {
                _.isUsingKeyboardRef.current || e.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: (0, V.jsx)(ne, {
                role: `menu`,
                "aria-orientation": `vertical`,
                "data-state": Wa(g.open),
                "data-radix-menu-content": ``,
                dir: _.dir,
                ...v,
                ...h,
                ref: E,
                style: { outline: `none`, ...h.style },
                onKeyDown: L(h.onKeyDown, (e) => {
                  let t =
                      e.target.closest(`[data-radix-menu-content]`) ===
                      e.currentTarget,
                    n = e.ctrlKey || e.altKey || e.metaKey,
                    r = e.key.length === 1;
                  t &&
                    (e.key === `Tab` && e.preventDefault(),
                    !n && r && oe(e.key));
                  let i = T.current;
                  if (e.target !== i || !Li.includes(e.key)) return;
                  e.preventDefault();
                  let a = x()
                    .filter((e) => !e.disabled)
                    .map((e) => e.ref.current);
                  (Ii.includes(e.key) && a.reverse(), qa(a));
                }),
                onBlur: L(e.onBlur, (e) => {
                  e.currentTarget.contains(e.target) ||
                    (window.clearTimeout(D.current), (O.current = ``));
                }),
                onPointerMove: L(
                  e.onPointerMove,
                  Qa((e) => {
                    let t = e.target,
                      n = j.current !== e.clientX;
                    e.currentTarget.contains(t) &&
                      n &&
                      ((re.current = e.clientX > j.current ? `right` : `left`),
                      (j.current = e.clientX));
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
sa.displayName = K;
var fa = `MenuGroup`,
  pa = B.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e;
    return (0, V.jsx)(I.div, { role: `group`, ...r, ref: t });
  });
pa.displayName = fa;
var ma = `MenuLabel`,
  ha = B.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e;
    return (0, V.jsx)(I.div, { ...r, ref: t });
  });
ha.displayName = ma;
var ga = `MenuItem`,
  _a = `menu.itemSelect`,
  va = B.forwardRef((e, t) => {
    let { disabled: n = !1, onSelect: r, ...i } = e,
      a = B.useRef(null),
      o = Zi(ga, e.__scopeMenu),
      s = oa(ga, e.__scopeMenu),
      c = N(t, a),
      l = B.useRef(!1),
      u = () => {
        let e = a.current;
        if (!n && e) {
          let t = new CustomEvent(_a, { bubbles: !0, cancelable: !0 });
          (e.addEventListener(_a, (e) => r?.(e), { once: !0 }),
            P(e, t),
            t.defaultPrevented ? (l.current = !1) : o.onClose());
        }
      };
    return (0, V.jsx)(ya, {
      ...i,
      ref: c,
      disabled: n,
      onClick: L(e.onClick, u),
      onPointerDown: (t) => {
        (e.onPointerDown?.(t), (l.current = !0));
      },
      onPointerUp: L(e.onPointerUp, (e) => {
        l.current || e.currentTarget?.click();
      }),
      onKeyDown: L(e.onKeyDown, (e) => {
        let t = s.searchRef.current !== ``;
        n ||
          (t && e.key === ` `) ||
          (Pi.includes(e.key) && (e.currentTarget.click(), e.preventDefault()));
      }),
    });
  });
va.displayName = ga;
var ya = B.forwardRef((e, t) => {
    let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e,
      o = oa(ga, n),
      s = qi(n),
      c = B.useRef(null),
      l = N(t, c),
      [u, d] = B.useState(!1),
      [f, p] = B.useState(``);
    return (
      B.useEffect(() => {
        let e = c.current;
        e && p((e.textContent ?? ``).trim());
      }, [a.children]),
      (0, V.jsx)(Vi.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: i ?? f,
        children: (0, V.jsx)(S, {
          asChild: !0,
          ...s,
          focusable: !r,
          children: (0, V.jsx)(I.div, {
            role: `menuitem`,
            "data-highlighted": u ? `` : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? `` : void 0,
            ...a,
            ref: l,
            onPointerMove: L(
              e.onPointerMove,
              Qa((e) => {
                r
                  ? o.onItemLeave(e)
                  : (o.onItemEnter(e),
                    e.defaultPrevented ||
                      e.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: L(
              e.onPointerLeave,
              Qa((e) => o.onItemLeave(e)),
            ),
            onFocus: L(e.onFocus, () => d(!0)),
            onBlur: L(e.onBlur, () => d(!1)),
          }),
        }),
      })
    );
  }),
  ba = `MenuCheckboxItem`,
  xa = B.forwardRef((e, t) => {
    let { checked: n = !1, onCheckedChange: r, ...i } = e;
    return (0, V.jsx)(ka, {
      scope: e.__scopeMenu,
      checked: n,
      children: (0, V.jsx)(va, {
        role: `menuitemcheckbox`,
        "aria-checked": Ga(n) ? `mixed` : n,
        ...i,
        ref: t,
        "data-state": Ka(n),
        onSelect: L(i.onSelect, () => r?.(Ga(n) ? !0 : !n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
xa.displayName = ba;
var Sa = `MenuRadioGroup`,
  [Ca, wa] = Wi(Sa, { value: void 0, onValueChange: () => {} }),
  Ta = B.forwardRef((e, t) => {
    let { value: n, onValueChange: r, ...i } = e,
      a = le(r);
    return (0, V.jsx)(Ca, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: a,
      children: (0, V.jsx)(pa, { ...i, ref: t }),
    });
  });
Ta.displayName = Sa;
var Ea = `MenuRadioItem`,
  Da = B.forwardRef((e, t) => {
    let { value: n, ...r } = e,
      i = wa(Ea, e.__scopeMenu),
      a = n === i.value;
    return (0, V.jsx)(ka, {
      scope: e.__scopeMenu,
      checked: a,
      children: (0, V.jsx)(va, {
        role: `menuitemradio`,
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Ka(a),
        onSelect: L(r.onSelect, () => i.onValueChange?.(n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
Da.displayName = Ea;
var Oa = `MenuItemIndicator`,
  [ka, Aa] = Wi(Oa, { checked: !1 }),
  ja = B.forwardRef((e, t) => {
    let { __scopeMenu: n, forceMount: r, ...i } = e,
      a = Aa(Oa, n);
    return (0, V.jsx)(v, {
      present: r || Ga(a.checked) || a.checked === !0,
      children: (0, V.jsx)(I.span, {
        ...i,
        ref: t,
        "data-state": Ka(a.checked),
      }),
    });
  });
ja.displayName = Oa;
var Ma = `MenuSeparator`,
  Na = B.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e;
    return (0, V.jsx)(I.div, {
      role: `separator`,
      "aria-orientation": `horizontal`,
      ...r,
      ref: t,
    });
  });
Na.displayName = Ma;
var Pa = `MenuArrow`,
  Fa = B.forwardRef((e, t) => {
    let { __scopeMenu: n, ...r } = e,
      i = Ki(n);
    return (0, V.jsx)(p, { ...i, ...r, ref: t });
  });
Fa.displayName = Pa;
var Ia = `MenuSub`,
  [La, Ra] = Wi(Ia),
  za = (e) => {
    let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: i } = e,
      a = Yi(Ia, t),
      o = Ki(t),
      [s, c] = B.useState(null),
      [l, u] = B.useState(null),
      d = le(i);
    return (
      B.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]),
      (0, V.jsx)(_, {
        ...o,
        children: (0, V.jsx)(Ji, {
          scope: t,
          open: r,
          onOpenChange: d,
          content: l,
          onContentChange: u,
          children: (0, V.jsx)(La, {
            scope: t,
            contentId: O(),
            triggerId: O(),
            trigger: s,
            onTriggerChange: c,
            children: n,
          }),
        }),
      })
    );
  };
za.displayName = Ia;
var Ba = `MenuSubTrigger`,
  Va = B.forwardRef((e, t) => {
    let n = Yi(Ba, e.__scopeMenu),
      r = Zi(Ba, e.__scopeMenu),
      i = Ra(Ba, e.__scopeMenu),
      a = oa(Ba, e.__scopeMenu),
      o = B.useRef(null),
      { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a,
      l = { __scopeMenu: e.__scopeMenu },
      u = B.useCallback(() => {
        (o.current && window.clearTimeout(o.current), (o.current = null));
      }, []);
    return (
      B.useEffect(() => u, [u]),
      B.useEffect(() => {
        let e = s.current;
        return () => {
          (window.clearTimeout(e), c(null));
        };
      }, [s, c]),
      (0, V.jsx)(ea, {
        asChild: !0,
        ...l,
        children: (0, V.jsx)(ya, {
          id: i.triggerId,
          "aria-haspopup": `menu`,
          "aria-expanded": n.open,
          "aria-controls": n.open ? i.contentId : void 0,
          "data-state": Wa(n.open),
          ...e,
          ref: se(t, i.onTriggerChange),
          onClick: (t) => {
            (e.onClick?.(t),
              !(e.disabled || t.defaultPrevented) &&
                (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: L(
            e.onPointerMove,
            Qa((t) => {
              (a.onItemEnter(t),
                !t.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !o.current &&
                  (a.onPointerGraceIntentChange(null),
                  (o.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), u());
                  }, 100))));
            }),
          ),
          onPointerLeave: L(
            e.onPointerLeave,
            Qa((e) => {
              u();
              let t = n.content?.getBoundingClientRect();
              if (t) {
                let r = n.content?.dataset.side,
                  i = r === `right`,
                  o = i ? -5 : 5,
                  c = t[i ? `left` : `right`],
                  l = t[i ? `right` : `left`];
                (a.onPointerGraceIntentChange({
                  area: [
                    { x: e.clientX + o, y: e.clientY },
                    { x: c, y: t.top },
                    { x: l, y: t.top },
                    { x: l, y: t.bottom },
                    { x: c, y: t.bottom },
                  ],
                  side: r,
                }),
                  window.clearTimeout(s.current),
                  (s.current = window.setTimeout(
                    () => a.onPointerGraceIntentChange(null),
                    300,
                  )));
              } else {
                if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                a.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: L(e.onKeyDown, (t) => {
            let i = a.searchRef.current !== ``;
            e.disabled ||
              (i && t.key === ` `) ||
              (Ri[r.dir].includes(t.key) &&
                (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()));
          }),
        }),
      })
    );
  });
Va.displayName = Ba;
var Ha = `MenuSubContent`,
  Ua = B.forwardRef((e, t) => {
    let n = ra(K, e.__scopeMenu),
      { forceMount: r = n.forceMount, align: i = `start`, ...a } = e,
      o = Yi(K, e.__scopeMenu),
      s = Zi(K, e.__scopeMenu),
      c = Ra(Ha, e.__scopeMenu),
      l = B.useRef(null),
      u = N(t, l);
    return (0, V.jsx)(Vi.Provider, {
      scope: e.__scopeMenu,
      children: (0, V.jsx)(v, {
        present: r || o.open,
        children: (0, V.jsx)(Vi.Slot, {
          scope: e.__scopeMenu,
          children: (0, V.jsx)(da, {
            id: c.contentId,
            "aria-labelledby": c.triggerId,
            ...a,
            ref: u,
            align: i,
            side: s.dir === `rtl` ? `left` : `right`,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (e) => {
              (s.isUsingKeyboardRef.current && l.current?.focus(),
                e.preventDefault());
            },
            onCloseAutoFocus: (e) => e.preventDefault(),
            onFocusOutside: L(e.onFocusOutside, (e) => {
              e.target !== c.trigger && o.onOpenChange(!1);
            }),
            onEscapeKeyDown: L(e.onEscapeKeyDown, (e) => {
              (s.onClose(), e.preventDefault());
            }),
            onKeyDown: L(e.onKeyDown, (e) => {
              let t = e.currentTarget.contains(e.target),
                n = zi[s.dir].includes(e.key);
              t &&
                n &&
                (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Ua.displayName = Ha;
function Wa(e) {
  return e ? `open` : `closed`;
}
function Ga(e) {
  return e === `indeterminate`;
}
function Ka(e) {
  return Ga(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
function qa(e) {
  let t = document.activeElement;
  for (let n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ja(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ya(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = Ja(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
function Xa(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
function Za(e, t) {
  return t ? Xa({ x: e.clientX, y: e.clientY }, t) : !1;
}
function Qa(e) {
  return (t) => (t.pointerType === `mouse` ? e(t) : void 0);
}
var $a = Qi,
  eo = ea,
  to = ia,
  no = sa,
  ro = pa,
  io = ha,
  ao = va,
  oo = xa,
  so = Ta,
  co = Da,
  lo = ja,
  uo = Na,
  fo = Fa,
  po = Va,
  mo = Ua,
  ho = `DropdownMenu`,
  [go, _o] = Se(ho, [Gi]),
  q = Gi(),
  [vo, yo] = go(ho),
  bo = (e) => {
    let {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: i,
        defaultOpen: a,
        onOpenChange: o,
        modal: s = !0,
      } = e,
      c = q(t),
      l = B.useRef(null),
      [u, d] = ye({ prop: i, defaultProp: a ?? !1, onChange: o, caller: ho });
    return (0, V.jsx)(vo, {
      scope: t,
      triggerId: O(),
      triggerRef: l,
      contentId: O(),
      open: u,
      onOpenChange: d,
      onOpenToggle: B.useCallback(() => d((e) => !e), [d]),
      modal: s,
      children: (0, V.jsx)($a, {
        ...c,
        open: u,
        onOpenChange: d,
        dir: r,
        modal: s,
        children: n,
      }),
    });
  };
bo.displayName = ho;
var xo = `DropdownMenuTrigger`,
  So = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e,
      a = yo(xo, n),
      o = q(n);
    return (0, V.jsx)(eo, {
      asChild: !0,
      ...o,
      children: (0, V.jsx)(I.button, {
        type: `button`,
        id: a.triggerId,
        "aria-haspopup": `menu`,
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? `open` : `closed`,
        "data-disabled": r ? `` : void 0,
        disabled: r,
        ...i,
        ref: se(t, a.triggerRef),
        onPointerDown: L(e.onPointerDown, (e) => {
          !r &&
            e.button === 0 &&
            e.ctrlKey === !1 &&
            (a.onOpenToggle(), a.open || e.preventDefault());
        }),
        onKeyDown: L(e.onKeyDown, (e) => {
          r ||
            ([`Enter`, ` `].includes(e.key) && a.onOpenToggle(),
            e.key === `ArrowDown` && a.onOpenChange(!0),
            [`Enter`, ` `, `ArrowDown`].includes(e.key) && e.preventDefault());
        }),
      }),
    });
  });
So.displayName = xo;
var Co = `DropdownMenuPortal`,
  wo = (e) => {
    let { __scopeDropdownMenu: t, ...n } = e,
      r = q(t);
    return (0, V.jsx)(to, { ...r, ...n });
  };
wo.displayName = Co;
var To = `DropdownMenuContent`,
  Eo = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = yo(To, n),
      a = q(n),
      o = B.useRef(!1);
    return (0, V.jsx)(no, {
      id: i.contentId,
      "aria-labelledby": i.triggerId,
      ...a,
      ...r,
      ref: t,
      onCloseAutoFocus: L(e.onCloseAutoFocus, (e) => {
        (o.current || i.triggerRef.current?.focus(),
          (o.current = !1),
          e.preventDefault());
      }),
      onInteractOutside: L(e.onInteractOutside, (e) => {
        let t = e.detail.originalEvent,
          n = t.button === 0 && t.ctrlKey === !0,
          r = t.button === 2 || n;
        (!i.modal || r) && (o.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
        "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
        "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
        "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
        "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
      },
    });
  });
Eo.displayName = To;
var Do = `DropdownMenuGroup`,
  Oo = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(ro, { ...i, ...r, ref: t });
  });
Oo.displayName = Do;
var ko = `DropdownMenuLabel`,
  Ao = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(io, { ...i, ...r, ref: t });
  });
Ao.displayName = ko;
var jo = `DropdownMenuItem`,
  Mo = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(ao, { ...i, ...r, ref: t });
  });
Mo.displayName = jo;
var No = `DropdownMenuCheckboxItem`,
  Po = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(oo, { ...i, ...r, ref: t });
  });
Po.displayName = No;
var Fo = `DropdownMenuRadioGroup`,
  Io = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(so, { ...i, ...r, ref: t });
  });
Io.displayName = Fo;
var Lo = `DropdownMenuRadioItem`,
  Ro = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(co, { ...i, ...r, ref: t });
  });
Ro.displayName = Lo;
var zo = `DropdownMenuItemIndicator`,
  Bo = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(lo, { ...i, ...r, ref: t });
  });
Bo.displayName = zo;
var Vo = `DropdownMenuSeparator`,
  Ho = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(uo, { ...i, ...r, ref: t });
  });
Ho.displayName = Vo;
var Uo = `DropdownMenuArrow`,
  Wo = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(fo, { ...i, ...r, ref: t });
  });
Wo.displayName = Uo;
var Go = `DropdownMenuSubTrigger`,
  Ko = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(po, { ...i, ...r, ref: t });
  });
Ko.displayName = Go;
var qo = `DropdownMenuSubContent`,
  Jo = B.forwardRef((e, t) => {
    let { __scopeDropdownMenu: n, ...r } = e,
      i = q(n);
    return (0, V.jsx)(mo, {
      ...i,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
        "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
        "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
        "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
        "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
      },
    });
  });
Jo.displayName = qo;
var Yo = bo,
  Xo = So,
  Zo = wo,
  Qo = Eo,
  $o = Ao,
  es = Mo,
  ts = Po,
  ns = Ro,
  rs = Bo,
  is = Ho,
  as = Ko,
  os = Jo,
  ss = Yo,
  cs = Xo,
  ls = B.forwardRef(({ className: e, inset: t, children: n, ...r }, i) =>
    (0, V.jsxs)(as, {
      ref: i,
      className: R(
        `flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent`,
        t && `pl-8`,
        e,
      ),
      ...r,
      children: [n, (0, V.jsx)(Le, { className: `ml-auto h-4 w-4` })],
    }),
  );
ls.displayName = as.displayName;
var us = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(os, {
    ref: n,
    className: R(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
      e,
    ),
    ...t,
  }),
);
us.displayName = os.displayName;
var ds = B.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  (0, V.jsx)(Zo, {
    children: (0, V.jsx)(Qo, {
      ref: r,
      sideOffset: t,
      className: R(
        `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        e,
      ),
      ...n,
    }),
  }),
);
ds.displayName = Qo.displayName;
var J = B.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, V.jsx)(es, {
    ref: r,
    className: R(
      `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground`,
      t && `pl-8`,
      e,
    ),
    ...n,
  }),
);
J.displayName = es.displayName;
var fs = B.forwardRef(({ className: e, children: t, checked: n, ...r }, i) =>
  (0, V.jsxs)(ts, {
    ref: i,
    className: R(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground`,
      e,
    ),
    checked: n,
    ...r,
    children: [
      (0, V.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, V.jsx)(rs, {
          children: (0, V.jsx)(Ze, { className: `h-4 w-4` }),
        }),
      }),
      t,
    ],
  }),
);
fs.displayName = ts.displayName;
var ps = B.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, V.jsxs)(ns, {
    ref: r,
    className: R(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground`,
      e,
    ),
    ...n,
    children: [
      (0, V.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, V.jsx)(rs, {
          children: (0, V.jsx)(Re, { className: `h-2 w-2 fill-current` }),
        }),
      }),
      t,
    ],
  }),
);
ps.displayName = ns.displayName;
var ms = B.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, V.jsx)($o, {
    ref: r,
    className: R(`px-2 py-1.5 text-sm font-semibold`, t && `pl-8`, e),
    ...n,
  }),
);
ms.displayName = $o.displayName;
var hs = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(is, { ref: n, className: R(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
hs.displayName = is.displayName;
var gs = ({ className: e, ...t }) =>
  (0, V.jsx)(`span`, {
    className: R(`ml-auto text-xs tracking-widest opacity-60`, e),
    ...t,
  });
gs.displayName = `DropdownMenuShortcut`;
var _s = `/assets/images/malaysia_main_new-BlYp5fos.jpg`,
  vs = `/assets/images/malaysia_profile_new-Zx35dPqS.jpg`,
  ys = `/assets/videos/malaysia_video_final-DNzhR4MA.mp4`,
  bs = `/assets/images/mal_adventure_1-Dbbkyoy3.jpg`,
  xs = `/assets/images/mal_adventure_2-FBsU-mqS.jpg`,
  Ss = `/assets/images/mal_adventure_3-D7k0PdNC.jpg`,
  Cs = `/assets/images/malaysia_profile_new-Zx35dPqS.jpg`,
  ws = `/assets/images/mal_adventure_5-D7tpvpS8.jpg`,
  Ts = `/assets/images/thailand_new-Cp8juYhA.jpg`,
  Es = `/assets/videos/thailand_video-DM6vMccj.mp4`,
  Ds = `/assets/images/thailand_adventure_1-CaCyTXdo.jpg`,
  Os = `/assets/images/thailand_adventure_2-BH_1AHSE.jpg`,
  ks = `/assets/images/thailand_adventure_3-DkmXOF2s.jpg`,
  As = `/assets/images/thailand_adventure_4-Cl9SNbJG.jpg`,
  js = `/assets/images/thailand_adventure_5-CSthYQn2.jpg`,
  Ms = `/assets/images/bali_main_new-CfJwH-Nh.jpg`,
  Ns = `/assets/videos/bali_video_final-BLtGBNRb.mp4`,
  Ps = `/assets/images/bali_adventure_1-DrUI4atJ.jpg`,
  Fs = `/assets/images/bali_adventure_2-DqjhD1ZJ.jpg`,
  Is = `/assets/images/bali_adventure_3-D85vdbAS.jpg`,
  Ls = `/assets/images/bali_adventure_4-D1qEhkC_.jpg`,
  Rs = `/assets/images/vietnam_main-DJpYp90I.jpg`,
  zs = `/assets/videos/vietnam_video-BB5WZWXv.mp4`,
  Bs = `/assets/images/viet_adventure_1-C605fpTq.jpg`,
  Vs = `/assets/images/viet_adventure_2-Csl9nXdM.jpg`,
  Hs = `/assets/images/viet_adventure_3-QTdr-R8O.jpg`,
  Us = `/assets/images/viet_adventure_4-jPGkc1Le.jpg`,
  Ws = `/assets/images/dubai_new-yDcuWJTk.jpg`,
  Gs = `/assets/videos/dubai_video_new-F7NCaZax.mp4`,
  Ks = `/assets/images/dubai_adventure_1-ofJ6MXYP.jpg`,
  qs = `/assets/images/dubai_adventure_2-BW0Cnhwr.jpg`,
  Js = `/assets/images/dubai_adventure_3-BooezKhG.jpg`,
  Ys = `/assets/images/dubai_adventure_4-izv5XTS1.jpg`,
  Xs = `/assets/images/dubai_adventure_5-DZEgW-Zv.jpg`,
  Zs = `/assets/images/maldives_main_new-BpzGb2Bm.jpg`,
  Qs = `/assets/videos/maldives_video_final-MW5_eyty.mp4`,
  $s = `/assets/images/mald_adventure_1-BT_N9vOm.jpg`,
  ec = `/assets/images/mald_adventure_2-Bh04cCk_.jpg`,
  tc = `/assets/images/mald_adventure_3-DGgphyNC.jpg`,
  nc = `/assets/images/mald_adventure_4-Z3xZDSEj.jpg`,
  rc = `/assets/images/singapore_main_new-C5GMMSMK.jpg`,
  ic = `/assets/videos/singapore_video_new-qHPl7CwF.mp4`,
  ac = `/assets/images/sing_adventure_1-CUJKEl23.jpg`,
  oc = `/assets/images/sing_adventure_2-BTUo0d9z.jpg`,
  sc = `/assets/images/sing_adventure_3-C13aPaOm.jpg`,
  cc = `/assets/images/sing_adventure_4-Dz4d0clM.jpg`,
  lc = `/assets/images/sing_adventure_5-B1FgWSVf.jpg`,
  uc = `/assets/images/srilanka_main-Bw151EGi.jpg`,
  dc = `/assets/videos/srilanka_video-D-8tLjuj.mp4`,
  fc = `/assets/images/sl_adventure_1-SC02VctO.jpg`,
  pc = `/assets/images/sl_adventure_2-C3hzSsyN.jpg`,
  mc = `/assets/images/sl_adventure_3-Dd8ymEjA.jpg`,
  hc = `/assets/images/sl_adventure_4-CpMyx7yZ.jpg`,
  gc = `/assets/images/kerala_main-BbxobrdS.jpg`,
  _c = `/assets/videos/kerala_video-DS_7pmj0.mp4`,
  vc = `/assets/images/kerala_adventure_1-DKfqrFeH.jpg`,
  yc = `/assets/images/kerala_adventure_2-YZyZV6g2.jpg`,
  bc = `/assets/images/kerala_adventure_3-CguKtshe.jpg`,
  xc = `/assets/images/kerala_adventure_4-DC5T-PQP.jpg`,
  Sc = `/assets/images/kerala_adventure_5-fAXyQbPr.jpg`,
  Cc = `/assets/images/kerala_adventure_6-B83-PdC1.jpg`,
  wc = `/assets/images/andaman_main-DBo_twRy.jpg`,
  Tc = `/assets/videos/andaman_video-CEtNPlxg.mp4`,
  Ec = `/assets/images/andaman_adventure_1-Dw6u78dS.jpg`,
  Dc = `/assets/images/andaman_adventure_2-B35_wIbY.jpg`,
  Oc = `/assets/images/andaman_adventure_3-DOqMBdWZ.jpg`,
  kc = `/assets/images/andaman_adventure_4-DBc7xxDQ.jpg`,
  Ac = `/assets/images/andaman_adventure_5-BjRNNNKK.jpg`,
  jc = `/assets/images/himachal_main-MZiJyvMr.webp`,
  Mc = `/assets/videos/himachal_video-jU4I1uZF.mp4`,
  Nc = `/assets/images/him_adventure_1-Be6AWLH-.jpg`,
  Pc = `/assets/images/him_adventure_2-LCSHHec5.jpg`,
  Fc = `/assets/images/him_adventure_3-BDJqe6NO.jpg`,
  Ic = `/assets/images/him_adventure_4-D-yAqJ3J.jpg`,
  Lc = `/assets/images/him_adventure_5-_K5ijAt2.jpg`,
  Rc = `/assets/images/kashmir_main-NltULny9.jpg`,
  zc = `/assets/videos/kashmir_video-CNEGyT3X.mp4`,
  Bc = `/assets/images/kas_adventure_1-XW5htf4o.jpg`,
  Vc = `/assets/images/kas_adventure_2-DFOOyJIe.jpg`,
  Hc = `/assets/images/kas_adventure_3-Bst4dxQ_.jpg`,
  Uc = `/assets/images/kas_adventure_4-BLAp_Elz.jpg`,
  Wc = `/assets/images/kas_adventure_5-DevYA9G4.jpg`,
  Gc = `/assets/images/kas_adventure_6-BOoq02na.jpg`,
  Kc = `/assets/images/goa_main-BfwaGgRB.jpg`,
  qc = `/assets/videos/goa_video-OvTxPj0p.mp4`,
  Jc = `/assets/images/goa_adventure_1-CewQCs0p.jpg`,
  Yc = `/assets/images/goa_adventure_2-_VwAvdTl.jpg`,
  Xc = `/assets/images/goa_adventure_3-DdDbNLg9.jpg`,
  Zc = `/assets/images/goa_adventure_4-BcYtiZmr.jpg`,
  Qc = `/assets/images/kar_main-CFske10N.jpg`,
  $c = `/assets/videos/kar_video-BuFjmHrg.mp4`,
  el = `/assets/images/kar_adventure_1-drspnWNw.jpg`,
  tl = `/assets/images/kar_adventure_2-vDXOVoAq.jpg`,
  nl = `/assets/images/kar_adventure_3-CJTTs23z.jpg`,
  rl = `/assets/images/kar_adventure_4-DT1WOzf-.jpg`,
  il = `/assets/images/kar_adventure_5-C7jZ7Id6.jpg`,
  al = `/assets/images/kar_adventure_6-DyROUjmE.jpg`,
  ol = `/assets/images/rajasthan_main-Cg2E9Ys_.png`,
  sl = `/assets/images/raj_adventure_1-B36uio7T.png`,
  cl = `/assets/images/raj_adventure_2-Cwr9cl-x.png`,
  ll = `/assets/images/raj_adventure_3-TcQ-13Sj.png`,
  ul = `/assets/images/meghalaya_new-CfpcH6Hn.png`,
  dl = `/assets/videos/hero-video-C8W6igjU.mp4`,
  fl = {
    "malaysia_main_new.jpg": _s,
    "malaysia_profile_new.jpg": vs,
    "malaysia_video_final.mp4": ys,
    "mal_adventure_1.jpg": bs,
    "mal_adventure_2.jpg": xs,
    "mal_adventure_3.jpg": Ss,
    "mal_adventure_4.jpg": Cs,
    "mal_adventure_5.jpg": ws,
    "thailand_new.jpg": Ts,
    "thailand_video.mp4": Es,
    "thailand_adventure_1.jpg": Ds,
    "thailand_adventure_2.jpg": Os,
    "thailand_adventure_3.jpg": ks,
    "thailand_adventure_4.jpg": As,
    "thailand_adventure_5.jpg": js,
    "bali_main_new.jpg": Ms,
    "bali_video_final.mp4": Ns,
    "bali_adventure_1.jpg": Ps,
    "bali_adventure_2.jpg": Fs,
    "bali_adventure_3.jpg": Is,
    "bali_adventure_4.jpg": Ls,
    "vietnam_main.jpg": Rs,
    "vietnam_video.mp4": zs,
    "viet_adventure_1.jpg": Bs,
    "viet_adventure_2.jpg": Vs,
    "viet_adventure_3.jpg": Hs,
    "viet_adventure_4.jpg": Us,
    "dubai_new.jpg": Ws,
    "dubai_video_new.mp4": Gs,
    "dubai_adventure_1.jpg": Ks,
    "dubai_adventure_2.jpg": qs,
    "dubai_adventure_3.jpg": Js,
    "dubai_adventure_4.jpg": Ys,
    "dubai_adventure_5.jpg": Xs,
    "maldives_main_new.jpg": Zs,
    "maldives_video_final.mp4": Qs,
    "mald_adventure_1.jpg": $s,
    "mald_adventure_2.jpg": ec,
    "mald_adventure_3.jpg": tc,
    "mald_adventure_4.jpg": nc,
    "singapore_main_new.jpg": rc,
    "singapore_video_new.mp4": ic,
    "sing_adventure_1.jpg": ac,
    "sing_adventure_2.jpg": oc,
    "sing_adventure_3.jpg": sc,
    "sing_adventure_4.jpg": cc,
    "sing_adventure_5.jpg": lc,
    "srilanka_main.jpg": uc,
    "srilanka_video.mp4": dc,
    "sl_adventure_1.jpg": fc,
    "sl_adventure_2.jpg": pc,
    "sl_adventure_3.jpg": mc,
    "sl_adventure_4.jpg": hc,
    "kerala_main.jpg": gc,
    "kerala_video.mp4": _c,
    "kerala_adventure_1.jpg": vc,
    "kerala_adventure_2.jpg": yc,
    "kerala_adventure_3.jpg": bc,
    "kerala_adventure_4.jpg": xc,
    "kerala_adventure_5.jpg": Sc,
    "kerala_adventure_6.jpg": Cc,
    "andaman_main.jpg": wc,
    "andaman_video.mp4": Tc,
    "andaman_adventure_1.jpg": Ec,
    "andaman_adventure_2.jpg": Dc,
    "andaman_adventure_3.jpg": Oc,
    "andaman_adventure_4.jpg": kc,
    "andaman_adventure_5.jpg": Ac,
    "himachal_main.webp": jc,
    "himachal_video.mp4": Mc,
    "him_adventure_1.jpg": Nc,
    "him_adventure_2.jpg": Pc,
    "him_adventure_3.jpg": Fc,
    "him_adventure_4.jpg": Ic,
    "him_adventure_5.jpg": Lc,
    "kashmir_main.jpg": Rc,
    "kashmir_video.mp4": zc,
    "kas_adventure_1.jpg": Bc,
    "kas_adventure_2.jpg": Vc,
    "kas_adventure_3.jpg": Hc,
    "kas_adventure_4.jpg": Uc,
    "kas_adventure_5.jpg": Wc,
    "kas_adventure_6.jpg": Gc,
    "goa_main.jpg": Kc,
    "goa_video.mp4": qc,
    "goa_adventure_1.jpg": Jc,
    "goa_adventure_2.jpg": Yc,
    "goa_adventure_3.jpg": Xc,
    "goa_adventure_4.jpg": Zc,
    "kar_main.jpg": Qc,
    "kar_video.mp4": $c,
    "kar_adventure_1.jpg": el,
    "kar_adventure_2.jpg": tl,
    "kar_adventure_3.jpg": nl,
    "kar_adventure_4.jpg": rl,
    "kar_adventure_5.jpg": il,
    "kar_adventure_6.jpg": al,
    "meghalaya_new.png": ul,
    "hero-video.mp4": dl,
    "rajasthan_main.png": ol,
    "raj_adventure_1.png": sl,
    "raj_adventure_2.png": cl,
    "raj_adventure_3.png": ll,
    "logo.png": `/assets/images/logo-dmU956Cf.png`,
    "corporate_trips.png": `/assets/images/corporate_trips-BhxZ18bz.png`,
    "private_trips.png": `/assets/images/private_trips-BpDvOyLf.png`,
    "strangers_trips.png": `/assets/images/strangers_trips-B8NgXp8_.png`,
    "couples_trips.png": `/assets/images/couples_trips-B-98o1zs.png`,
    "college_trips.png": `/assets/images/college_trips-DK6pSnWj.png`,
    "family_trips.png": `/assets/images/family_trips-4KyYgHXS.png`,
    "malaysia_new_front.jpg": vs,
    "malaysia_new.jpg": _s,
    "meghalaya_new.jpg": ul,
  },
  pl = (e) =>
    e
      ? e.startsWith(`http://`) || e.startsWith(`https://`)
        ? e
        : fl[e]
          ? fl[e]
          : fl[e.includes(`/`) ? e.split(`/`).pop() : e] || e
      : ``,
  ml = () => {
    let { destinations: e, homeContent: t } = ke(),
      [n, r] = (0, B.useState)(!1),
      i = (0, B.useRef)(null);
    (0, B.useEffect)(
      () => () => {
        i.current && clearTimeout(i.current);
      },
      [],
    );
    let o = () => {
        (i.current && clearTimeout(i.current), r(!0));
      },
      s = () => {
        i.current = setTimeout(() => {
          r(!1);
        }, 150);
      };
    return (0, V.jsx)(`nav`, {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-black via-black/95 to-red-600 shadow-xl py-3`,
      children: (0, V.jsxs)(`div`, {
        className: `container mx-auto px-3 mobile:px-4 flex justify-between items-center`,
        children: [
          (0, V.jsxs)(a, {
            to: `/`,
            className: `flex items-center space-x-2`,
            children: [
              (0, V.jsx)(`img`, {
                src: `/logo.png`,
                alt: `Planet Life Logo`,
                width: 40,
                height: 40,
                className: `h-8 mobile:h-10 w-auto rounded-md shadow-sm`,
              }),
              (0, V.jsx)(`span`, {
                className: `text-sm mobile:text-lg sm:text-xl font-heading font-bold tracking-tight text-white uppercase truncate max-w-[80px] xs:max-w-[100px] mobile:max-w-[120px] sm:max-w-none`,
                children: `PLANET LIFE`,
              }),
            ],
          }),
          (0, V.jsxs)(`div`, {
            className: `flex items-center gap-2 mobile:gap-4 sm:gap-6 lg:gap-8`,
            children: [
              (0, V.jsxs)(`div`, {
                className: `hidden lg:flex items-center gap-6`,
                children: [
                  (0, V.jsx)(a, {
                    to: `/`,
                    className: `font-bold hover:text-black/70 transition-colors text-white font-sans uppercase text-sm`,
                    children: `Home`,
                  }),
                  (0, V.jsxs)(ss, {
                    open: n,
                    onOpenChange: r,
                    modal: !1,
                    children: [
                      (0, V.jsxs)(cs, {
                        onMouseEnter: o,
                        onMouseLeave: s,
                        className: `flex items-center gap-1 font-bold hover:text-black/70 transition-colors text-white font-sans uppercase text-sm outline-none cursor-default`,
                        children: [
                          `Destinations `,
                          (0, V.jsx)(ze, { className: `w-4 h-4` }),
                        ],
                      }),
                      (0, V.jsxs)(ds, {
                        onMouseEnter: o,
                        onMouseLeave: s,
                        className: `bg-white border-black/10 p-2 min-w-[280px] z-[60]`,
                        children: [
                          (0, V.jsxs)(`div`, {
                            className: `grid grid-cols-2 gap-2 p-2`,
                            children: [
                              (0, V.jsxs)(`div`, {
                                children: [
                                  (0, V.jsx)(ms, {
                                    className: `text-[10px] text-red-600 font-black uppercase mb-1 px-2`,
                                    children: `International Tours`,
                                  }),
                                  [
                                    `Thailand`,
                                    `Malaysia`,
                                    `Bali`,
                                    `Maldives`,
                                    `Vietnam`,
                                    `Sri Lanka`,
                                    `Dubai`,
                                    `Singapore`,
                                  ].map((t) => {
                                    let n = e.find(
                                      (e) =>
                                        e.name
                                          .toLowerCase()
                                          .includes(t.toLowerCase()) ||
                                        e.country
                                          .toLowerCase()
                                          .includes(t.toLowerCase()),
                                    );
                                    return (0, V.jsx)(
                                      J,
                                      {
                                        asChild: !0,
                                        children: (0, V.jsx)(a, {
                                          to: n
                                            ? `/destination/${n.id}`
                                            : `/destinations`,
                                          className: `w-full font-bold text-black hover:text-white hover:bg-red-600 py-1.5 px-3 rounded-md transition-colors font-sans uppercase text-[10px] cursor-pointer block`,
                                          children: t,
                                        }),
                                      },
                                      t,
                                    );
                                  }),
                                ],
                              }),
                              (0, V.jsxs)(`div`, {
                                className: `border-l border-black/5 pl-2`,
                                children: [
                                  (0, V.jsx)(ms, {
                                    className: `text-[10px] text-red-600 font-black uppercase mb-1 px-2`,
                                    children: `National Tours`,
                                  }),
                                  [
                                    `Kerala`,
                                    `Andaman`,
                                    `Himachal`,
                                    `Kashmir`,
                                    `Goa`,
                                    `Karnataka`,
                                    `Rajasthan`,
                                  ].map((t) => {
                                    let n = e.find(
                                      (e) =>
                                        e.name
                                          .toLowerCase()
                                          .includes(t.toLowerCase()) ||
                                        e.country
                                          .toLowerCase()
                                          .includes(t.toLowerCase()),
                                    );
                                    return (0, V.jsx)(
                                      J,
                                      {
                                        asChild: !0,
                                        children: (0, V.jsx)(a, {
                                          to: n
                                            ? `/destination/${n.id}`
                                            : `/destinations`,
                                          className: `w-full font-bold text-black hover:text-white hover:bg-red-600 py-1.5 px-3 rounded-md transition-colors font-sans uppercase text-[10px] cursor-pointer block`,
                                          children: t,
                                        }),
                                      },
                                      t,
                                    );
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, V.jsx)(hs, {}),
                          (0, V.jsx)(J, {
                            asChild: !0,
                            children: (0, V.jsx)(a, {
                              to: `/destinations`,
                              className: `w-full font-bold text-black hover:text-white hover:bg-red-600 py-2 px-4 rounded-md transition-colors font-sans uppercase text-xs mt-1 cursor-pointer block text-center`,
                              children: `View All Destinations`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, V.jsx)(a, {
                    to: `/packages`,
                    className: `font-bold hover:text-black/70 transition-colors text-white font-sans uppercase text-sm`,
                    children: `Packages`,
                  }),
                  (0, V.jsx)(a, {
                    to: `/about`,
                    className: `font-bold hover:text-black/70 transition-colors text-white font-sans uppercase text-sm`,
                    children: `About Us`,
                  }),
                  (0, V.jsx)(a, {
                    to: `/contact`,
                    className: `font-bold hover:text-black/70 transition-colors text-white font-sans uppercase text-sm`,
                    children: `Contact`,
                  }),
                ],
              }),
              (0, V.jsx)(a, {
                to: `/quote`,
                children: (0, V.jsxs)(z, {
                  className: `bg-foreground hover:bg-foreground/80 text-background font-bold rounded-full px-3 mobile:px-4 sm:px-8 py-2 font-heading border border-foreground/10 uppercase text-[8px] mobile:text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest shadow-lg transition-transform hover:scale-105`,
                  children: [
                    (0, V.jsx)(He, { className: `w-3 h-3 mr-1 sm:mr-2` }),
                    (0, V.jsx)(`span`, {
                      className: `hidden mobile:inline`,
                      children: `Get Quote`,
                    }),
                    (0, V.jsx)(`span`, {
                      className: `mobile:hidden`,
                      children: `Quote`,
                    }),
                  ],
                }),
              }),
              (0, V.jsxs)(ss, {
                modal: !1,
                children: [
                  (0, V.jsx)(cs, {
                    asChild: !0,
                    children: (0, V.jsx)(z, {
                      variant: `ghost`,
                      size: `icon`,
                      className: `lg:hidden text-white hover:bg-white/10`,
                      children: (0, V.jsx)(Xe, { className: `h-6 w-6` }),
                    }),
                  }),
                  (0, V.jsxs)(ds, {
                    align: `end`,
                    className: `w-64 bg-white border-black/20 p-4 max-h-[80vh] overflow-y-auto z-[60]`,
                    children: [
                      (0, V.jsx)(J, {
                        asChild: !0,
                        children: (0, V.jsx)(a, {
                          to: `/`,
                          className: `w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm`,
                          children: `Home`,
                        }),
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `my-2 border-t border-black/10 pt-2 px-2`,
                        children: [
                          (0, V.jsx)(`p`, {
                            className: `text-[10px] text-red-600 font-black uppercase mb-2`,
                            children: `International Tours`,
                          }),
                          (0, V.jsx)(`div`, {
                            className: `grid grid-cols-2 gap-1 mb-4`,
                            children: [
                              `Thailand`,
                              `Malaysia`,
                              `Bali`,
                              `Maldives`,
                              `Vietnam`,
                              `Sri Lanka`,
                              `Dubai`,
                              `Singapore`,
                            ].map((t) => {
                              let n = e.find(
                                (e) =>
                                  e.name
                                    .toLowerCase()
                                    .includes(t.toLowerCase()) ||
                                  e.country
                                    .toLowerCase()
                                    .includes(t.toLowerCase()),
                              );
                              return (0, V.jsx)(
                                J,
                                {
                                  asChild: !0,
                                  children: (0, V.jsx)(a, {
                                    to: n
                                      ? `/destination/${n.id}`
                                      : `/destinations`,
                                    className: `w-full py-1 px-2 font-bold text-black hover:text-red-600 font-sans text-[10px] uppercase`,
                                    children: t,
                                  }),
                                },
                                t,
                              );
                            }),
                          }),
                          (0, V.jsx)(`p`, {
                            className: `text-[10px] text-red-600 font-black uppercase mb-2`,
                            children: `National Tours`,
                          }),
                          (0, V.jsx)(`div`, {
                            className: `grid grid-cols-2 gap-1`,
                            children: [
                              `Kerala`,
                              `Andaman`,
                              `Himachal`,
                              `Kashmir`,
                              `Goa`,
                              `Karnataka`,
                              `Rajasthan`,
                            ].map((t) => {
                              let n = e.find(
                                (e) =>
                                  e.name
                                    .toLowerCase()
                                    .includes(t.toLowerCase()) ||
                                  e.country
                                    .toLowerCase()
                                    .includes(t.toLowerCase()),
                              );
                              return (0, V.jsx)(
                                J,
                                {
                                  asChild: !0,
                                  children: (0, V.jsx)(a, {
                                    to: n
                                      ? `/destination/${n.id}`
                                      : `/destinations`,
                                    className: `w-full py-1 px-2 font-bold text-black hover:text-red-600 font-sans text-[10px] uppercase`,
                                    children: t,
                                  }),
                                },
                                t,
                              );
                            }),
                          }),
                        ],
                      }),
                      (0, V.jsx)(J, {
                        asChild: !0,
                        children: (0, V.jsx)(a, {
                          to: `/packages`,
                          className: `w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm border-t border-black/10 mt-2`,
                          children: `All Packages`,
                        }),
                      }),
                      (0, V.jsx)(J, {
                        asChild: !0,
                        children: (0, V.jsx)(a, {
                          to: `/about`,
                          className: `w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm`,
                          children: `About Us`,
                        }),
                      }),
                      (0, V.jsx)(J, {
                        asChild: !0,
                        children: (0, V.jsx)(a, {
                          to: `/contact`,
                          className: `w-full py-2 font-bold text-black hover:text-red-600 font-sans uppercase text-sm`,
                          children: `Contact`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  hl = () => {
    let { contactContent: e } = ke();
    return (0, V.jsx)(`footer`, {
      className: `bg-[#0f1115] text-white pt-12 mobile:pt-16 md:pt-24 pb-8 mobile:pb-12`,
      children: (0, V.jsxs)(`div`, {
        className: `container mx-auto px-4`,
        children: [
          (0, V.jsxs)(`div`, {
            className: `text-center mb-12 mobile:mb-16 md:mb-24 pb-8 mobile:pb-12 md:pb-16 border-b border-white/5`,
            children: [
              (0, V.jsx)(`span`, {
                className: `text-[9px] mobile:text-[10px] uppercase tracking-[0.3em] mobile:tracking-[0.4em] mb-6 mobile:mb-10 text-white/40 block font-bold`,
                children: `Partnered With Global Tourism Boards`,
              }),
              (0, V.jsxs)(`div`, {
                className: `grid grid-cols-2 mobile:flex mobile:flex-wrap justify-center items-center gap-4 mobile:gap-6 md:gap-10 lg:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700`,
                children: [
                  (0, V.jsx)(`span`, {
                    className: `text-lg mobile:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white tracking-tighter text-center`,
                    children: `PENANG`,
                  }),
                  (0, V.jsx)(`span`, {
                    className: `text-lg mobile:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white tracking-tighter text-center`,
                    children: `ABU DHABI`,
                  }),
                  (0, V.jsx)(`span`, {
                    className: `text-lg mobile:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white tracking-tighter text-center`,
                    children: `JAPAN.`,
                  }),
                  (0, V.jsx)(`span`, {
                    className: `text-lg mobile:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white tracking-tighter text-center`,
                    children: `THAILAND`,
                  }),
                ],
              }),
            ],
          }),
          (0, V.jsxs)(`div`, {
            className: `grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-4 gap-8 mobile:gap-10 lg:gap-16 mb-12 mobile:mb-16 md:mb-20`,
            children: [
              (0, V.jsxs)(`div`, {
                className: `space-y-8`,
                children: [
                  (0, V.jsx)(a, {
                    to: `/`,
                    className: `inline-block group`,
                    children: (0, V.jsx)(`span`, {
                      className: `text-2xl font-bold tracking-tighter text-white font-heading uppercase group-hover:text-primary transition-colors`,
                      children: `PLANET LIFE`,
                    }),
                  }),
                  (0, V.jsx)(`p`, {
                    className: `text-white/60 leading-relaxed font-medium text-sm`,
                    children: `Curating bespoke international adventures that define luxury and discovery. Experience the world through our expert eyes.`,
                  }),
                  (0, V.jsx)(`div`, {
                    className: `flex space-x-4`,
                    children: [
                      { Icon: Me, href: e.facebook || `#` },
                      {
                        Icon: Pe,
                        href: (() => {
                          let t = e.instagram;
                          return t
                            ? t.startsWith(`http`)
                              ? t
                              : `https://instagram.com/${t.startsWith(`@`) ? t.substring(1) : t}`
                            : `#`;
                        })(),
                      },
                      { Icon: qe, href: e.twitter || `#` },
                      { Icon: Ke, href: e.youtube || `#` },
                    ].map(({ Icon: e, href: t }, n) =>
                      (0, V.jsx)(
                        `a`,
                        {
                          href: t,
                          target: t !== `#` && t !== `` ? `_blank` : void 0,
                          rel:
                            t !== `#` && t !== ``
                              ? `noopener noreferrer`
                              : void 0,
                          className: `w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-primary hover:border-primary transition-all duration-300`,
                          children: (0, V.jsx)(e, { className: `w-4 h-4` }),
                        },
                        n,
                      ),
                    ),
                  }),
                ],
              }),
              (0, V.jsxs)(`div`, {
                children: [
                  (0, V.jsx)(`h3`, {
                    className: `text-sm font-bold mb-8 font-heading uppercase tracking-widest text-primary`,
                    children: `Explore`,
                  }),
                  (0, V.jsxs)(`ul`, {
                    className: `space-y-4`,
                    children: [
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Home`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/about`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `About Us`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/destinations`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Destinations`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/packages`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Packages`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/contact`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Contact`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, V.jsxs)(`div`, {
                children: [
                  (0, V.jsx)(`h3`, {
                    className: `text-sm font-bold mb-8 font-heading uppercase tracking-widest text-primary`,
                    children: `Destinations`,
                  }),
                  (0, V.jsxs)(`ul`, {
                    className: `space-y-4`,
                    children: [
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/destination/thailand`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Thailand`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/destination/bali`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Bali`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/destination/maldives`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Maldives`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/destination/dubai`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Dubai`,
                        }),
                      }),
                      (0, V.jsx)(`li`, {
                        children: (0, V.jsx)(a, {
                          to: `/destination/singapore`,
                          className: `text-white/50 hover:text-white transition-colors text-sm font-medium`,
                          children: `Singapore`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, V.jsxs)(`div`, {
                className: `space-y-8`,
                children: [
                  (0, V.jsx)(`h3`, {
                    className: `text-sm font-bold mb-8 font-heading uppercase tracking-widest text-primary`,
                    children: `Office`,
                  }),
                  (0, V.jsxs)(`ul`, {
                    className: `space-y-6`,
                    children: [
                      (0, V.jsxs)(`li`, {
                        className: `flex items-start gap-4`,
                        children: [
                          (0, V.jsx)(`div`, {
                            className: `w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0`,
                            children: (0, V.jsx)(Be, {
                              className: `w-4 h-4 text-white/40`,
                            }),
                          }),
                          (0, V.jsx)(`span`, {
                            className: `text-white/60 text-sm font-medium leading-relaxed`,
                            children:
                              e.address ||
                              `2nd floor, 64, Nethaji Rd, Periyar, Madurai Main, Madurai, Tamil Nadu 625001`,
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`li`, {
                        className: `flex items-center gap-4`,
                        children: [
                          (0, V.jsx)(`div`, {
                            className: `w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0`,
                            children: (0, V.jsx)(He, {
                              className: `w-4 h-4 text-white/40`,
                            }),
                          }),
                          (0, V.jsx)(`span`, {
                            className: `text-white/60 text-sm font-medium tracking-wider`,
                            children: e.phone,
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`li`, {
                        className: `flex items-center gap-4`,
                        children: [
                          (0, V.jsx)(`div`, {
                            className: `w-10 h-10 border border-white/10 flex items-center justify-center rounded-full shrink-0`,
                            children: (0, V.jsx)(Ne, {
                              className: `w-4 h-4 text-white/40`,
                            }),
                          }),
                          (0, V.jsx)(`span`, {
                            className: `text-white/60 text-sm font-medium`,
                            children: e.email,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, V.jsx)(`div`, {
            className: `border-t border-white/5 py-10 mobile:py-14 md:py-20`,
            children: (0, V.jsx)(`div`, {
              className: `grid grid-cols-2 md:grid-cols-4 gap-6 mobile:gap-8 md:gap-12`,
              children: [
                { icon: Ge, label: `100% Secure`, sub: `Payment Protection` },
                { icon: We, label: `24/7 Support`, sub: `Trip Assistance` },
                { icon: Ye, label: `Top Rated`, sub: `4.9/5 Google Reviews` },
                { icon: Fe, label: `Verified`, sub: `Certified Agency` },
              ].map((e, t) =>
                (0, V.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col items-center text-center gap-4 group`,
                    children: [
                      (0, V.jsx)(e.icon, {
                        className: `w-8 h-8 text-white/20 group-hover:text-primary transition-colors duration-500`,
                      }),
                      (0, V.jsxs)(`div`, {
                        children: [
                          (0, V.jsx)(`h4`, {
                            className: `font-bold font-heading text-white text-xs uppercase tracking-widest mb-1`,
                            children: e.label,
                          }),
                          (0, V.jsx)(`p`, {
                            className: `text-[10px] text-white/40 uppercase tracking-tighter font-bold`,
                            children: e.sub,
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          }),
          (0, V.jsxs)(`div`, {
            className: `border-t border-white/5 pt-8 mobile:pt-12 flex flex-col md:flex-row items-center justify-between gap-4 mobile:gap-6`,
            children: [
              (0, V.jsxs)(`p`, {
                className: `text-white/30 text-[11px] font-bold tracking-widest uppercase md:flex-1 text-center md:text-left`,
                children: [
                  `© `,
                  new Date().getFullYear(),
                  ` PLANET LIFE. All rights reserved.`,
                ],
              }),
              (0, V.jsxs)(`div`, {
                className: `flex gap-8 md:flex-1 justify-center md:justify-end`,
                children: [
                  (0, V.jsx)(a, {
                    to: `/privacy`,
                    className: `text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest`,
                    children: `Privacy Policy`,
                  }),
                  (0, V.jsx)(a, {
                    to: `/terms`,
                    className: `text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest`,
                    children: `Terms of Service`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  gl = () => {
    let { pathname: e, hash: t } = o();
    return (
      (0, B.useEffect)(() => {
        if (t) {
          let e = t.replace(`#`, ``),
            n = document.getElementById(e);
          if (n) {
            let e = setTimeout(() => {
              n.scrollIntoView({ behavior: `smooth` });
            }, 100);
            return () => clearTimeout(e);
          }
        } else window.scrollTo(0, 0);
      }, [e, t]),
      null
    );
  },
  _l = () => {
    let [e, t] = (0, B.useState)(!1);
    return (
      (0, B.useEffect)(() => {
        let e = () => {
          window.scrollY > 300 ? t(!0) : t(!1);
        };
        return (
          window.addEventListener(`scroll`, e),
          () => window.removeEventListener(`scroll`, e)
        );
      }, []),
      e
        ? (0, V.jsx)(z, {
            className: `fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4`,
            size: `icon`,
            onClick: () => {
              window.scrollTo({ top: 0, behavior: `smooth` });
            },
            "aria-label": `Back to top`,
            children: (0, V.jsx)(Ve, { className: `h-5 w-5` }),
          })
        : null
    );
  },
  vl = () =>
    (0, V.jsxs)(`a`, {
      href: `https://api.whatsapp.com/send/?phone=919994553297&text=&type=phone_number&app_absent=0&wame_ctl=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAPlpqNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacxUzLD7oqIAb0iHEbqg2rfSan4t-_yhm2oS4H51uUKn--GpbH9scxCbrFGwA_aem_XlIlxjsB1lYu_o_3xsy5IQ`,
      target: `_blank`,
      rel: `noopener noreferrer`,
      className: `fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center gap-2`,
      "aria-label": `Chat on WhatsApp`,
      children: [
        (0, V.jsx)(`span`, {
          className: `max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium`,
          children: `Chat with us`,
        }),
        (0, V.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          className: `w-6 h-6`,
          xmlns: `http://www.w3.org/2000/svg`,
          children: (0, V.jsx)(`path`, {
            d: `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.007a9.86 9.86 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z`,
          }),
        }),
        (0, V.jsxs)(`span`, {
          className: `absolute -top-1 -right-1 flex h-3 w-3`,
          children: [
            (0, V.jsx)(`span`, {
              className: `animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75`,
            }),
            (0, V.jsx)(`span`, {
              className: `relative inline-flex rounded-full h-3 w-3 bg-white`,
            }),
          ],
        }),
      ],
    }),
  yl = () =>
    (0, V.jsxs)(`div`, {
      className: `fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[9999]`,
      children: [
        (0, V.jsx)(`div`, {
          className: `w-32 h-32 md:w-40 md:h-40 relative`,
          children: (0, V.jsxs)(`svg`, {
            viewBox: `0 0 100 100`,
            className: `w-full h-full`,
            fill: `none`,
            xmlns: `http://www.w3.org/2000/svg`,
            children: [
              (0, V.jsx)(me.path, {
                d: `M5,80 L30,35 L55,80 Z`,
                fill: `#dc2626`,
                initial: { y: 30, opacity: 0 },
                animate: { y: [30, 0, 30], opacity: [0, 1, 0] },
                transition: {
                  duration: 1.5,
                  repeat: 1 / 0,
                  ease: `easeInOut`,
                  delay: 0,
                },
              }),
              (0, V.jsx)(me.path, {
                d: `M45,80 L70,40 L95,80 Z`,
                fill: `#b91c1c`,
                initial: { y: 30, opacity: 0 },
                animate: { y: [30, 0, 30], opacity: [0, 1, 0] },
                transition: {
                  duration: 1.5,
                  repeat: 1 / 0,
                  ease: `easeInOut`,
                  delay: 0.2,
                },
              }),
              (0, V.jsx)(me.path, {
                d: `M25,80 L50,15 L75,80 Z`,
                fill: `#ef4444`,
                initial: { y: 30, opacity: 0 },
                animate: { y: [30, 0, 30], opacity: [0, 1, 0] },
                transition: {
                  duration: 1.5,
                  repeat: 1 / 0,
                  ease: `easeInOut`,
                  delay: 0.4,
                },
              }),
            ],
          }),
        }),
        (0, V.jsx)(me.div, {
          initial: { opacity: 0.5 },
          animate: { opacity: [0.5, 1, 0.5] },
          transition: { duration: 1.5, repeat: 1 / 0, ease: `easeInOut` },
          className: `text-white font-heading font-extrabold text-xl md:text-2xl uppercase tracking-[0.3em] mt-4 flex items-center gap-2`,
          children: `Planet Life`,
        }),
      ],
    }),
  bl = Te,
  xl = m,
  Sl = B.forwardRef(({ className: e, ...t }, n) =>
    (0, V.jsx)(T, {
      ref: n,
      className: R(
        `fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
    }),
  );
Sl.displayName = T.displayName;
var Cl = B.forwardRef(
  ({ className: e, children: t, closeClassName: n, ...r }, i) =>
    (0, V.jsxs)(xl, {
      children: [
        (0, V.jsx)(Sl, {}),
        (0, V.jsxs)(oe, {
          ref: i,
          className: R(
            `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg`,
            e,
          ),
          ...r,
          children: [
            t,
            (0, V.jsxs)(De, {
              className: R(
                `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none`,
                n,
              ),
              children: [
                (0, V.jsx)(Je, { className: `h-4 w-4` }),
                (0, V.jsx)(`span`, { className: `sr-only`, children: `Close` }),
              ],
            }),
          ],
        }),
      ],
    }),
);
Cl.displayName = oe.displayName;
var wl = ({ className: e, ...t }) =>
  (0, V.jsx)(`div`, {
    className: R(`flex flex-col space-y-1.5 text-center sm:text-left`, e),
    ...t,
  });
wl.displayName = `DialogHeader`;
var Tl = ({ className: e, ...t }) =>
  (0, V.jsx)(`div`, {
    className: R(
      `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
      e,
    ),
    ...t,
  });
Tl.displayName = `DialogFooter`;
var El = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(E, {
    ref: n,
    className: R(`text-lg font-semibold leading-none tracking-tight`, e),
    ...t,
  }),
);
El.displayName = E.displayName;
var Dl = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(Ee, {
    ref: n,
    className: R(`text-sm text-muted-foreground`, e),
    ...t,
  }),
);
Dl.displayName = Ee.displayName;
var Ol = B.forwardRef(({ className: e, type: t, ...n }, r) =>
  (0, V.jsx)(`input`, {
    type: t,
    className: R(
      `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
      e,
    ),
    ref: r,
    ...n,
  }),
);
Ol.displayName = `Input`;
var kl = `Label`,
  Al = B.forwardRef((e, t) =>
    (0, V.jsx)(I.label, {
      ...e,
      ref: t,
      onMouseDown: (t) => {
        t.target.closest(`button, input, select, textarea`) ||
          (e.onMouseDown?.(t),
          !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      },
    }),
  );
Al.displayName = kl;
var jl = Al,
  Ml = Ae(
    `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`,
  ),
  Y = B.forwardRef(({ className: e, ...t }, n) =>
    (0, V.jsx)(jl, { ref: n, className: R(Ml(), e), ...t }),
  );
Y.displayName = jl.displayName;
var Nl = ie,
  Pl = j,
  Fl = B.forwardRef(({ className: e, children: t, ...n }, r) =>
    (0, V.jsxs)(de, {
      ref: r,
      className: R(
        `flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
        e,
      ),
      ...n,
      children: [
        t,
        (0, V.jsx)(xe, {
          asChild: !0,
          children: (0, V.jsx)(ze, { className: `h-4 w-4 opacity-50` }),
        }),
      ],
    }),
  );
Fl.displayName = de.displayName;
var Il = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(ge, {
    ref: n,
    className: R(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, V.jsx)(Ie, { className: `h-4 w-4` }),
  }),
);
Il.displayName = ge.displayName;
var Ll = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(ve, {
    ref: n,
    className: R(`flex cursor-default items-center justify-center py-1`, e),
    ...t,
    children: (0, V.jsx)(ze, { className: `h-4 w-4` }),
  }),
);
Ll.displayName = ve.displayName;
var Rl = B.forwardRef(
  ({ className: e, children: t, position: n = `popper`, ...r }, i) =>
    (0, V.jsx)(ue, {
      children: (0, V.jsxs)(F, {
        ref: i,
        className: R(
          `relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
          n === `popper` &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
          e,
        ),
        position: n,
        ...r,
        children: [
          (0, V.jsx)(Il, {}),
          (0, V.jsx)(we, {
            className: R(
              `p-1`,
              n === `popper` &&
                `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]`,
            ),
            children: t,
          }),
          (0, V.jsx)(Ll, {}),
        ],
      }),
    }),
);
Rl.displayName = F.displayName;
var zl = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(ce, {
    ref: n,
    className: R(`py-1.5 pl-8 pr-2 text-sm font-semibold`, e),
    ...t,
  }),
);
zl.displayName = ce.displayName;
var X = B.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, V.jsxs)(M, {
    ref: r,
    className: R(
      `relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground`,
      e,
    ),
    ...n,
    children: [
      (0, V.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, V.jsx)(he, {
          children: (0, V.jsx)(Ze, { className: `h-4 w-4` }),
        }),
      }),
      (0, V.jsx)(Ce, { children: t }),
    ],
  }),
);
X.displayName = M.displayName;
var Bl = B.forwardRef(({ className: e, ...t }, n) =>
  (0, V.jsx)(fe, { ref: n, className: R(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
Bl.displayName = fe.displayName;
var Vl = `/assets/images/lead_form_banner-B24LhMhq.png`,
  Hl = ({ isOpen: e, onClose: t, destinations: n }) => {
    let { toast: r } = ut(),
      i = s(),
      { contactContent: a } = ke(),
      [o, c] = (0, B.useState)(1),
      [l, u] = (0, B.useState)(!1),
      [d, f] = (0, B.useState)({
        destination: ``,
        travelMonth: ``,
        duration: ``,
        numPersons: ``,
        name: ``,
        email: ``,
        whatsapp: ``,
        language: ``,
      }),
      p = (e) => {
        let { name: t, value: n } = e.target;
        f((e) => ({ ...e, [t]: n }));
      },
      m = (e, t) => {
        f((n) => ({ ...n, [e]: t }));
      };
    return (0, V.jsx)(bl, {
      open: e,
      onOpenChange: (e) => {
        e || t();
      },
      children: (0, V.jsxs)(Cl, {
        className: `max-w-[420px] w-[95vw] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 overflow-hidden p-0`,
        children: [
          (0, V.jsxs)(`div`, {
            className: `w-full h-32 sm:h-36 overflow-hidden relative`,
            children: [
              (0, V.jsx)(`img`, {
                src: Vl,
                alt: `Explore Travel Packages`,
                className: `w-full h-full object-cover`,
              }),
              (0, V.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent`,
              }),
              (0, V.jsx)(`div`, {
                className: `absolute bottom-3 left-4 text-white`,
                children: (0, V.jsx)(`span`, {
                  className: `bg-red-600 text-white text-[9px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded-full shadow-md`,
                  children: `Planet Life`,
                }),
              }),
            ],
          }),
          (0, V.jsxs)(`div`, {
            className: `p-5 sm:p-6 space-y-4`,
            children: [
              (0, V.jsxs)(wl, {
                className: `text-left mb-2`,
                children: [
                  (0, V.jsx)(El, {
                    className: `text-lg sm:text-xl font-bold text-foreground font-heading uppercase`,
                    children: `Get Your Custom Quote`,
                  }),
                  (0, V.jsx)(Dl, {
                    className: `sr-only`,
                    children: `Lead form to unlock custom travel packages.`,
                  }),
                ],
              }),
              o === 1
                ? (0, V.jsxs)(`div`, {
                    className: `space-y-4`,
                    children: [
                      (0, V.jsxs)(`div`, {
                        className: `space-y-3`,
                        children: [
                          (0, V.jsxs)(Y, {
                            className: `text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2`,
                            children: [
                              (0, V.jsx)(Be, { className: `w-3 h-3` }),
                              ` Destination`,
                            ],
                          }),
                          (0, V.jsxs)(Nl, {
                            value: d.destination,
                            onValueChange: (e) => m(`destination`, e),
                            children: [
                              (0, V.jsx)(Fl, {
                                className: `bg-gray-50 border-gray-200 text-gray-900`,
                                children: (0, V.jsx)(Pl, {
                                  placeholder: `Select Destination`,
                                }),
                              }),
                              (0, V.jsxs)(Rl, {
                                className: `bg-white text-gray-900`,
                                children: [
                                  (0, V.jsx)(X, {
                                    value: `All Destinations`,
                                    children: `All Destinations`,
                                  }),
                                  n.map((e) =>
                                    (0, V.jsx)(
                                      X,
                                      { value: e.name, children: e.name },
                                      e.id,
                                    ),
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `space-y-3`,
                        children: [
                          (0, V.jsxs)(Y, {
                            className: `text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2`,
                            children: [
                              (0, V.jsx)(Fe, { className: `w-3 h-3` }),
                              ` Travel Month`,
                            ],
                          }),
                          (0, V.jsxs)(Nl, {
                            value: d.travelMonth,
                            onValueChange: (e) => m(`travelMonth`, e),
                            children: [
                              (0, V.jsx)(Fl, {
                                className: `bg-gray-50 border-gray-200 text-gray-900`,
                                children: (0, V.jsx)(Pl, {
                                  placeholder: `Select Month`,
                                }),
                              }),
                              (0, V.jsx)(Rl, {
                                className: `bg-white text-gray-900`,
                                children: [
                                  `January`,
                                  `February`,
                                  `March`,
                                  `April`,
                                  `May`,
                                  `June`,
                                  `July`,
                                  `August`,
                                  `September`,
                                  `October`,
                                  `November`,
                                  `December`,
                                ].map((e) =>
                                  (0, V.jsx)(X, { value: e, children: e }, e),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-4`,
                        children: [
                          (0, V.jsxs)(`div`, {
                            className: `space-y-3`,
                            children: [
                              (0, V.jsxs)(Y, {
                                className: `text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2`,
                                children: [
                                  (0, V.jsx)(We, { className: `w-3 h-3` }),
                                  ` Duration`,
                                ],
                              }),
                              (0, V.jsxs)(Nl, {
                                value: d.duration,
                                onValueChange: (e) => m(`duration`, e),
                                children: [
                                  (0, V.jsx)(Fl, {
                                    className: `bg-gray-50 border-gray-200 text-gray-900`,
                                    children: (0, V.jsx)(Pl, {
                                      placeholder: `Duration`,
                                    }),
                                  }),
                                  (0, V.jsxs)(Rl, {
                                    className: `bg-white text-gray-900`,
                                    children: [
                                      (0, V.jsx)(X, {
                                        value: `3-5`,
                                        children: `3-5 Days`,
                                      }),
                                      (0, V.jsx)(X, {
                                        value: `5-7`,
                                        children: `5-7 Days`,
                                      }),
                                      (0, V.jsx)(X, {
                                        value: `7-10`,
                                        children: `7-10 Days`,
                                      }),
                                      (0, V.jsx)(X, {
                                        value: `10+`,
                                        children: `10+ Days`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, V.jsxs)(`div`, {
                            className: `space-y-3`,
                            children: [
                              (0, V.jsxs)(Y, {
                                className: `text-red-600 font-extrabold uppercase text-[10px] flex items-center gap-2`,
                                children: [
                                  (0, V.jsx)(Ue, { className: `w-3 h-3` }),
                                  ` Persons`,
                                ],
                              }),
                              (0, V.jsxs)(Nl, {
                                value: d.numPersons,
                                onValueChange: (e) => m(`numPersons`, e),
                                children: [
                                  (0, V.jsx)(Fl, {
                                    className: `bg-gray-50 border-gray-200 text-gray-900`,
                                    children: (0, V.jsx)(Pl, {
                                      placeholder: `Persons`,
                                    }),
                                  }),
                                  (0, V.jsxs)(Rl, {
                                    className: `bg-white text-gray-900`,
                                    children: [
                                      (0, V.jsx)(X, {
                                        value: `solo`,
                                        children: `Solo`,
                                      }),
                                      (0, V.jsx)(X, {
                                        value: `couple`,
                                        children: `Couple`,
                                      }),
                                      (0, V.jsx)(X, {
                                        value: `family-3`,
                                        children: `Family (3)`,
                                      }),
                                      (0, V.jsx)(X, {
                                        value: `family-4`,
                                        children: `Family (4+)`,
                                      }),
                                      (0, V.jsx)(X, {
                                        value: `group`,
                                        children: `Group`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, V.jsx)(z, {
                        onClick: () => {
                          if (
                            !d.destination ||
                            !d.travelMonth ||
                            !d.duration ||
                            !d.numPersons
                          ) {
                            r({
                              title: `Missing Fields`,
                              description: `Please fill in all fields to proceed.`,
                              variant: `destructive`,
                            });
                            return;
                          }
                          c(2);
                        },
                        className: `w-full bg-red-600 hover:bg-black text-white font-extrabold py-6 rounded-xl mt-6 uppercase transition-all duration-300 shadow-lg`,
                        children: `Continue Request`,
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `flex justify-center gap-2 mt-4`,
                        children: [
                          (0, V.jsx)(`div`, {
                            className: `w-8 h-1.5 rounded-full bg-red-600`,
                          }),
                          (0, V.jsx)(`div`, {
                            className: `w-1.5 h-1.5 rounded-full bg-gray-300`,
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, V.jsxs)(`div`, {
                    className: `space-y-4`,
                    children: [
                      (0, V.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, V.jsx)(Y, {
                            className: `text-red-600 font-extrabold uppercase text-xs`,
                            children: `Name`,
                          }),
                          (0, V.jsx)(Ol, {
                            name: `name`,
                            placeholder: `Your Name`,
                            value: d.name,
                            onChange: p,
                            className: `bg-gray-50 border-gray-200 text-gray-900`,
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, V.jsx)(Y, {
                            className: `text-red-600 font-extrabold uppercase text-xs`,
                            children: `Email Address`,
                          }),
                          (0, V.jsx)(Ol, {
                            name: `email`,
                            type: `email`,
                            placeholder: `youremail@gmail.com`,
                            value: d.email,
                            onChange: p,
                            className: `bg-gray-50 border-gray-200 text-gray-900`,
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, V.jsx)(Y, {
                            className: `text-red-600 font-extrabold uppercase text-xs`,
                            children: `WhatsApp Number`,
                          }),
                          (0, V.jsxs)(`div`, {
                            className: `flex`,
                            children: [
                              (0, V.jsx)(`div`, {
                                className: `bg-gray-100 border border-r-0 border-gray-200 rounded-l-md px-3 flex items-center text-gray-500 text-sm`,
                                children: `🇮🇳 +91`,
                              }),
                              (0, V.jsx)(Ol, {
                                name: `whatsapp`,
                                placeholder: `9876543210`,
                                value: d.whatsapp,
                                onChange: p,
                                className: `bg-gray-50 border-gray-200 rounded-l-none text-gray-900`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, V.jsx)(Y, {
                            className: `text-red-600 font-extrabold uppercase text-xs`,
                            children: `Select Language`,
                          }),
                          (0, V.jsxs)(Nl, {
                            value: d.language,
                            onValueChange: (e) => m(`language`, e),
                            children: [
                              (0, V.jsx)(Fl, {
                                className: `bg-gray-50 border-gray-200 text-gray-900`,
                                children: (0, V.jsx)(Pl, {
                                  placeholder: `Language`,
                                }),
                              }),
                              (0, V.jsxs)(Rl, {
                                className: `bg-white text-gray-900`,
                                children: [
                                  (0, V.jsx)(X, {
                                    value: `english`,
                                    children: `English`,
                                  }),
                                  (0, V.jsx)(X, {
                                    value: `hindi`,
                                    children: `Hindi`,
                                  }),
                                  (0, V.jsx)(X, {
                                    value: `tamil`,
                                    children: `Tamil`,
                                  }),
                                  (0, V.jsx)(X, {
                                    value: `malayalam`,
                                    children: `Malayalam`,
                                  }),
                                  (0, V.jsx)(X, {
                                    value: `kannada`,
                                    children: `Kannada`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, V.jsx)(z, {
                        onClick: async (e) => {
                          if (
                            (e.preventDefault(),
                            !d.name || !d.email || !d.whatsapp || !d.language)
                          ) {
                            r({
                              title: `Missing Fields`,
                              description: `Please fill in all fields to submit.`,
                              variant: `destructive`,
                            });
                            return;
                          }
                          u(!0);
                          let n = `*New Explore Packages Quote Request - Planet Life*%0A%0A*Name:* ${d.name}%0A*WhatsApp:* ${d.whatsapp}%0A*Email:* ${d.email}%0A*Destination:* ${d.destination}%0A*Month:* ${d.travelMonth}%0A*Duration:* ${d.duration}%0A*Persons:* ${d.numPersons}%0A*Preferred Language:* ${d.language}`,
                            o = a.phone.replace(/[^0-9]/g, ``),
                            s = `https://wa.me/${o.length === 10 ? `91${o}` : o}?text=${n}`;
                          (await new Promise((e) => setTimeout(e, 800)),
                            r({
                              title: `Redirecting to WhatsApp...`,
                              description: `Sending your request to our travel experts.`,
                            }),
                            window.open(s, `_blank`),
                            u(!1),
                            t(),
                            c(1),
                            f({
                              destination: ``,
                              travelMonth: ``,
                              duration: ``,
                              numPersons: ``,
                              name: ``,
                              email: ``,
                              whatsapp: ``,
                              language: ``,
                            }),
                            i(`/packages`));
                        },
                        disabled: l,
                        className: `w-full bg-primary hover:bg-black text-white font-bold py-6 rounded-xl mt-6 uppercase transition-all duration-300 shadow-lg tracking-widest`,
                        children: l ? `Processing...` : `Submit Quote Request`,
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `flex justify-center gap-2 mt-4`,
                        children: [
                          (0, V.jsx)(`div`, {
                            className: `w-1.5 h-1.5 rounded-full bg-muted`,
                          }),
                          (0, V.jsx)(`div`, {
                            className: `w-8 h-1.5 rounded-full bg-primary/40`,
                          }),
                        ],
                      }),
                      (0, V.jsx)(z, {
                        variant: `link`,
                        onClick: () => c(1),
                        className: `w-full text-sm text-muted-foreground hover:text-foreground`,
                        children: `Back to previous step`,
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  },
  Ul = `modulepreload`,
  Wl = function (e) {
    return `/` + e;
  },
  Gl = {},
  Z = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = Wl(t, n)), t in Gl)) return;
          Gl[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : Ul),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Kl = (0, B.lazy)(() =>
    Z(
      () => import(`./Home_v4.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    ),
  ),
  ql = (0, B.lazy)(() =>
    Z(
      () => import(`./Destinations.js`),
      __vite__mapDeps([9, 2, 1, 3, 4, 5, 10, 7]),
    ),
  ),
  Jl = (0, B.lazy)(() =>
    Z(
      () => import(`./DestinationDetail.js`),
      __vite__mapDeps([11, 1, 5, 3, 4, 10, 12, 7, 13]),
    ),
  ),
  Yl = (0, B.lazy)(() =>
    Z(
      () => import(`./Packages.js`),
      __vite__mapDeps([14, 1, 2, 3, 4, 5, 7]),
    ),
  ),
  Xl = (0, B.lazy)(() =>
    Z(
      () => import(`./About.js`),
      __vite__mapDeps([15, 1, 2, 3, 4, 5, 12, 7, 6]),
    ),
  ),
  Zl = (0, B.lazy)(() =>
    Z(
      () => import(`./Contact.js`),
      __vite__mapDeps([16, 1, 2, 3, 4, 5, 10, 17, 7]),
    ),
  ),
  Ql = (0, B.lazy)(() =>
    Z(
      () => import(`./Booking.js`),
      __vite__mapDeps([18, 1, 5, 3, 4, 10, 7]),
    ),
  ),
  $l = (0, B.lazy)(() =>
    Z(
      () => import(`./Quote.js`),
      __vite__mapDeps([19, 1, 5, 3, 4, 10, 7]),
    ),
  ),
  eu = (0, B.lazy)(() =>
    Z(
      () => import(`./Privacy.js`),
      __vite__mapDeps([20, 2, 1, 3, 4, 7]),
    ),
  ),
  tu = (0, B.lazy)(() =>
    Z(
      () => import(`./Terms.js`),
      __vite__mapDeps([21, 2, 1, 3, 4, 7]),
    ),
  ),
  nu = (0, B.lazy)(() =>
    Z(() => import(`./NotFound.js`), __vite__mapDeps([22, 1, 3])),
  ),
  ru = (0, B.lazy)(() =>
    Z(
      () => import(`./Login.js`),
      __vite__mapDeps([23, 1, 5, 3, 4, 10]),
    ),
  ),
  iu = (0, B.lazy)(() =>
    Z(
      () => import(`./Dashboard.js`),
      __vite__mapDeps([24, 1, 5, 3, 4, 10, 13, 17, 6, 7]),
    ),
  ),
  au = new ji(),
  ou = () => (0, V.jsx)(yl, {}),
  su = () => {
    let { isLoading: e, destinations: t } = ke(),
      r = o(),
      a = s(),
      c = (0, B.useRef)(r.pathname),
      l = (0, B.useRef)(new Set([r.pathname])),
      [u, d] = (0, B.useState)(!1);
    if (
      ((0, B.useEffect)(() => {
        let e = c.current;
        c.current = r.pathname;
        let t = r.pathname.startsWith(`/admin`),
          n = r.pathname === `/quote`,
          i = r.pathname === `/privacy` || r.pathname === `/terms`,
          a = localStorage.getItem(`leadFormSubmitted`) === `true`;
        new URLSearchParams(r.search).get(`lead`) === `true` && !t && !n && !i
          ? d(!0)
          : r.pathname !== e &&
            !t &&
            !n &&
            !i &&
            !a &&
            (l.current.has(r.pathname) || (d(!0), l.current.add(r.pathname)));
      }, [r.pathname, r.search]),
      e)
    )
      return (0, V.jsx)(yl, {});
    let f = r.pathname !== `/quote` && !r.pathname.startsWith(`/admin`);
    return (0, V.jsxs)(`div`, {
      className: `flex flex-col min-h-screen`,
      children: [
        (0, V.jsx)(gl, {}),
        (0, V.jsx)(_l, {}),
        f && (0, V.jsx)(vl, {}),
        (0, V.jsx)(ml, {}),
        (0, V.jsx)(`main`, {
          className: `flex-grow`,
          children: (0, V.jsx)(B.Suspense, {
            fallback: (0, V.jsx)(ou, {}),
            children: (0, V.jsxs)(n, {
              children: [
                (0, V.jsx)(i, { path: `/admin`, element: (0, V.jsx)(ru, {}) }),
                (0, V.jsx)(i, { path: `/admin/`, element: (0, V.jsx)(ru, {}) }),
                (0, V.jsx)(i, {
                  path: `/admin/login`,
                  element: (0, V.jsx)(ru, {}),
                }),
                (0, V.jsx)(i, {
                  path: `/admin/dashboard`,
                  element: (0, V.jsx)(iu, {}),
                }),
                (0, V.jsx)(i, { path: `/`, element: (0, V.jsx)(Kl, {}) }),
                (0, V.jsx)(i, {
                  path: `/destinations`,
                  element: (0, V.jsx)(ql, {}),
                }),
                (0, V.jsx)(i, {
                  path: `/destination/:id`,
                  element: (0, V.jsx)(Jl, {}),
                }),
                (0, V.jsx)(i, {
                  path: `/packages`,
                  element: (0, V.jsx)(Yl, {}),
                }),
                (0, V.jsx)(i, {
                  path: `/booking/:packageId`,
                  element: (0, V.jsx)(Ql, {}),
                }),
                (0, V.jsx)(i, { path: `/quote`, element: (0, V.jsx)($l, {}) }),
                (0, V.jsx)(i, { path: `/about`, element: (0, V.jsx)(Xl, {}) }),
                (0, V.jsx)(i, {
                  path: `/contact`,
                  element: (0, V.jsx)(Zl, {}),
                }),
                (0, V.jsx)(i, {
                  path: `/privacy`,
                  element: (0, V.jsx)(eu, {}),
                }),
                (0, V.jsx)(i, { path: `/terms`, element: (0, V.jsx)(tu, {}) }),
                (0, V.jsx)(i, { path: `*`, element: (0, V.jsx)(nu, {}) }),
              ],
            }),
          }),
        }),
        (0, V.jsx)(hl, {}),
        (0, V.jsx)(Hl, {
          isOpen: u,
          onClose: () => {
            d(!1);
            let e = new URLSearchParams(r.search);
            if (e.get(`lead`) === `true`) {
              e.delete(`lead`);
              let t = e.toString();
              a(
                { pathname: r.pathname, search: t ? `?${t}` : `` },
                { replace: !0 },
              );
            }
          },
          destinations: t || [],
        }),
      ],
    });
  },
  cu = () => (
    console.log(`App component rendering`),
    (0, V.jsx)(Ni, {
      client: au,
      children: (0, V.jsxs)(Nr, {
        children: [
          (0, V.jsx)(gn, {}),
          (0, V.jsx)(Xn, {}),
          (0, V.jsx)(je, {
            children: (0, V.jsx)(c, {
              future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
              children: (0, V.jsx)(su, {}),
            }),
          }),
        ],
      }),
    })
  ),
  lu = t((e, t) => {
    var n = typeof Element < `u`,
      r = typeof Map == `function`,
      i = typeof Set == `function`,
      a = typeof ArrayBuffer == `function` && !!ArrayBuffer.isView;
    function o(e, t) {
      if (e === t) return !0;
      if (e && t && typeof e == `object` && typeof t == `object`) {
        if (e.constructor !== t.constructor) return !1;
        var s, c, l;
        if (Array.isArray(e)) {
          if (((s = e.length), s != t.length)) return !1;
          for (c = s; c-- !== 0; ) if (!o(e[c], t[c])) return !1;
          return !0;
        }
        var u;
        if (r && e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (u = e.entries(); !(c = u.next()).done; )
            if (!t.has(c.value[0])) return !1;
          for (u = e.entries(); !(c = u.next()).done; )
            if (!o(c.value[1], t.get(c.value[0]))) return !1;
          return !0;
        }
        if (i && e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (u = e.entries(); !(c = u.next()).done; )
            if (!t.has(c.value[0])) return !1;
          return !0;
        }
        if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
          if (((s = e.length), s != t.length)) return !1;
          for (c = s; c-- !== 0; ) if (e[c] !== t[c]) return !1;
          return !0;
        }
        if (e.constructor === RegExp)
          return e.source === t.source && e.flags === t.flags;
        if (
          e.valueOf !== Object.prototype.valueOf &&
          typeof e.valueOf == `function` &&
          typeof t.valueOf == `function`
        )
          return e.valueOf() === t.valueOf();
        if (
          e.toString !== Object.prototype.toString &&
          typeof e.toString == `function` &&
          typeof t.toString == `function`
        )
          return e.toString() === t.toString();
        if (((l = Object.keys(e)), (s = l.length), s !== Object.keys(t).length))
          return !1;
        for (c = s; c-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, l[c])) return !1;
        if (n && e instanceof Element) return !1;
        for (c = s; c-- !== 0; )
          if (
            !(
              (l[c] === `_owner` || l[c] === `__v` || l[c] === `__o`) &&
              e.$$typeof
            ) &&
            !o(e[l[c]], t[l[c]])
          )
            return !1;
        return !0;
      }
      return e !== e && t !== t;
    }
    t.exports = function (e, t) {
      try {
        return o(e, t);
      } catch (e) {
        if ((e.message || ``).match(/stack|recursion/i))
          return (
            console.warn(`react-fast-compare cannot handle circular refs`),
            !1
          );
        throw e;
      }
    };
  }),
  uu = t((e, t) => {
    t.exports = function (e, t, n, r, i, a, o, s) {
      if (!e) {
        var c;
        if (t === void 0)
          c = Error(
            `Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.`,
          );
        else {
          var l = [n, r, i, a, o, s],
            u = 0;
          ((c = Error(
            t.replace(/%s/g, function () {
              return l[u++];
            }),
          )),
            (c.name = `Invariant Violation`));
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  }),
  du = t((e, t) => {
    t.exports = function (e, t, n, r) {
      var i = n ? n.call(r, e, t) : void 0;
      if (i !== void 0) return !!i;
      if (e === t) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var a = Object.keys(e),
        o = Object.keys(t);
      if (a.length !== o.length) return !1;
      for (
        var s = Object.prototype.hasOwnProperty.bind(t), c = 0;
        c < a.length;
        c++
      ) {
        var l = a[c];
        if (!s(l)) return !1;
        var u = e[l],
          d = t[l];
        if (
          ((i = n ? n.call(r, u, d, l) : void 0),
          i === !1 || (i === void 0 && u !== d))
        )
          return !1;
      }
      return !0;
    };
  }),
  fu = e(lu()),
  pu = e(uu()),
  mu = e(du()),
  hu = ((e) => (
    (e.BASE = `base`),
    (e.BODY = `body`),
    (e.HEAD = `head`),
    (e.HTML = `html`),
    (e.LINK = `link`),
    (e.META = `meta`),
    (e.NOSCRIPT = `noscript`),
    (e.SCRIPT = `script`),
    (e.STYLE = `style`),
    (e.TITLE = `title`),
    (e.FRAGMENT = `Symbol(react.fragment)`),
    e
  ))(hu || {}),
  gu = {
    link: { rel: [`amphtml`, `canonical`, `alternate`] },
    script: { type: [`application/ld+json`] },
    meta: {
      charset: ``,
      name: [`generator`, `robots`, `description`],
      property: [
        `og:type`,
        `og:title`,
        `og:url`,
        `og:image`,
        `og:image:alt`,
        `og:description`,
        `twitter:url`,
        `twitter:title`,
        `twitter:description`,
        `twitter:image`,
        `twitter:image:alt`,
        `twitter:card`,
        `twitter:site`,
      ],
    },
  },
  _u = Object.values(hu),
  vu = {
    accesskey: `accessKey`,
    charset: `charSet`,
    class: `className`,
    contenteditable: `contentEditable`,
    contextmenu: `contextMenu`,
    "http-equiv": `httpEquiv`,
    itemprop: `itemProp`,
    tabindex: `tabIndex`,
  },
  yu = Object.entries(vu).reduce((e, [t, n]) => ((e[n] = t), e), {}),
  Q = `data-rh`,
  bu = {
    DEFAULT_TITLE: `defaultTitle`,
    DEFER: `defer`,
    ENCODE_SPECIAL_CHARACTERS: `encodeSpecialCharacters`,
    ON_CHANGE_CLIENT_STATE: `onChangeClientState`,
    TITLE_TEMPLATE: `titleTemplate`,
    PRIORITIZE_SEO_TAGS: `prioritizeSeoTags`,
  },
  xu = (e, t) => {
    for (let n = e.length - 1; n >= 0; --n) {
      let r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  Su = (e) => {
    let t = xu(e, `title`),
      n = xu(e, bu.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join(``)), n && t))
      return n.replace(/%s/g, () => t);
    let r = xu(e, bu.DEFAULT_TITLE);
    return t || r || void 0;
  },
  Cu = (e) => xu(e, bu.ON_CHANGE_CLIENT_STATE) || (() => {}),
  wu = (e, t) =>
    t
      .filter((t) => t[e] !== void 0)
      .map((t) => t[e])
      .reduce((e, t) => ({ ...e, ...t }), {}),
  Tu = (e, t) =>
    t
      .filter((e) => e.base !== void 0)
      .map((e) => e.base)
      .reverse()
      .reduce((t, n) => {
        if (!t.length) {
          let r = Object.keys(n);
          for (let i = 0; i < r.length; i += 1) {
            let a = r[i].toLowerCase();
            if (e.indexOf(a) !== -1 && n[a]) return t.concat(n);
          }
        }
        return t;
      }, []),
  Eu = (e) => console && typeof console.warn == `function` && console.warn(e),
  Du = (e, t, n) => {
    let r = {};
    return n
      .filter((t) =>
        Array.isArray(t[e])
          ? !0
          : (t[e] !== void 0 &&
              Eu(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`,
              ),
            !1),
      )
      .map((t) => t[e])
      .reverse()
      .reduce((e, n) => {
        let i = {};
        n.filter((e) => {
          let n,
            a = Object.keys(e);
          for (let r = 0; r < a.length; r += 1) {
            let i = a[r],
              o = i.toLowerCase();
            (t.indexOf(o) !== -1 &&
              !(n === `rel` && e[n].toLowerCase() === `canonical`) &&
              !(o === `rel` && e[o].toLowerCase() === `stylesheet`) &&
              (n = o),
              t.indexOf(i) !== -1 &&
                (i === `innerHTML` || i === `cssText` || i === `itemprop`) &&
                (n = i));
          }
          if (!n || !e[n]) return !1;
          let o = e[n].toLowerCase();
          return (
            r[n] || (r[n] = {}),
            i[n] || (i[n] = {}),
            r[n][o] ? !1 : ((i[n][o] = !0), !0)
          );
        })
          .reverse()
          .forEach((t) => e.push(t));
        let a = Object.keys(i);
        for (let e = 0; e < a.length; e += 1) {
          let t = a[e];
          r[t] = { ...r[t], ...i[t] };
        }
        return e;
      }, [])
      .reverse();
  },
  Ou = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  ku = (e) => ({
    baseTag: Tu([`href`], e),
    bodyAttributes: wu(`bodyAttributes`, e),
    defer: xu(e, bu.DEFER),
    encode: xu(e, bu.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: wu(`htmlAttributes`, e),
    linkTags: Du(`link`, [`rel`, `href`], e),
    metaTags: Du(
      `meta`,
      [`name`, `charset`, `http-equiv`, `property`, `itemprop`],
      e,
    ),
    noscriptTags: Du(`noscript`, [`innerHTML`], e),
    onChangeClientState: Cu(e),
    scriptTags: Du(`script`, [`src`, `innerHTML`], e),
    styleTags: Du(`style`, [`cssText`], e),
    title: Su(e),
    titleAttributes: wu(`titleAttributes`, e),
    prioritizeSeoTags: Ou(e, bu.PRIORITIZE_SEO_TAGS),
  }),
  Au = (e) => (Array.isArray(e) ? e.join(``) : e),
  ju = (e, t) => {
    let n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
      if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  Mu = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (e, n) => (ju(n, t) ? e.priority.push(n) : e.default.push(n), e),
          { priority: [], default: [] },
        )
      : { default: e, priority: [] },
  Nu = (e, t) => ({ ...e, [t]: void 0 }),
  Pu = [`noscript`, `script`, `style`],
  Fu = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, `&amp;`)
          .replace(/</g, `&lt;`)
          .replace(/>/g, `&gt;`)
          .replace(/"/g, `&quot;`)
          .replace(/'/g, `&#x27;`),
  Iu = (e) =>
    Object.keys(e).reduce((t, n) => {
      let r = e[n] === void 0 ? `${n}` : `${n}="${e[n]}"`;
      return t ? `${t} ${r}` : r;
    }, ``),
  Lu = (e, t, n, r) => {
    let i = Iu(n),
      a = Au(t);
    return i
      ? `<${e} ${Q}="true" ${i}>${Fu(a, r)}</${e}>`
      : `<${e} ${Q}="true">${Fu(a, r)}</${e}>`;
  },
  Ru = (e, t, n = !0) =>
    t.reduce((t, r) => {
      let i = r,
        a = Object.keys(i)
          .filter((e) => !(e === `innerHTML` || e === `cssText`))
          .reduce((e, t) => {
            let r = i[t] === void 0 ? t : `${t}="${Fu(i[t], n)}"`;
            return e ? `${e} ${r}` : r;
          }, ``),
        o = i.innerHTML || i.cssText || ``;
      return `${t}<${e} ${Q}="true" ${a}${Pu.indexOf(e) === -1 ? `/>` : `>${o}</${e}>`}`;
    }, ``),
  zu = (e, t = {}) =>
    Object.keys(e).reduce((t, n) => {
      let r = vu[n];
      return ((t[r || n] = e[n]), t);
    }, t),
  Bu = (e, t, n) => {
    let r = zu(n, { key: t, [Q]: !0 });
    return [B.createElement(`title`, r, t)];
  },
  Vu = (e, t) =>
    t.map((t, n) => {
      let r = { key: n, [Q]: !0 };
      return (
        Object.keys(t).forEach((e) => {
          let n = vu[e] || e;
          n === `innerHTML` || n === `cssText`
            ? (r.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText })
            : (r[n] = t[e]);
        }),
        B.createElement(e, r)
      );
    }),
  $ = (e, t, n = !0) => {
    switch (e) {
      case `title`:
        return {
          toComponent: () => Bu(e, t.title, t.titleAttributes),
          toString: () => Lu(e, t.title, t.titleAttributes, n),
        };
      case `bodyAttributes`:
      case `htmlAttributes`:
        return { toComponent: () => zu(t), toString: () => Iu(t) };
      default:
        return { toComponent: () => Vu(e, t), toString: () => Ru(e, t, n) };
    }
  },
  Hu = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    let i = Mu(e, gu.meta),
      a = Mu(t, gu.link),
      o = Mu(n, gu.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...Vu(`meta`, i.priority),
          ...Vu(`link`, a.priority),
          ...Vu(`script`, o.priority),
        ],
        toString: () =>
          `${$(`meta`, i.priority, r)} ${$(`link`, a.priority, r)} ${$(`script`, o.priority, r)}`,
      },
      metaTags: i.default,
      linkTags: a.default,
      scriptTags: o.default,
    };
  },
  Uu = (e) => {
    let {
        baseTag: t,
        bodyAttributes: n,
        encode: r = !0,
        htmlAttributes: i,
        noscriptTags: a,
        styleTags: o,
        title: s = ``,
        titleAttributes: c,
        prioritizeSeoTags: l,
      } = e,
      { linkTags: u, metaTags: d, scriptTags: f } = e,
      p = { toComponent: () => {}, toString: () => `` };
    return (
      l &&
        ({
          priorityMethods: p,
          linkTags: u,
          metaTags: d,
          scriptTags: f,
        } = Hu(e)),
      {
        priority: p,
        base: $(`base`, t, r),
        bodyAttributes: $(`bodyAttributes`, n, r),
        htmlAttributes: $(`htmlAttributes`, i, r),
        link: $(`link`, u, r),
        meta: $(`meta`, d, r),
        noscript: $(`noscript`, a, r),
        script: $(`script`, f, r),
        style: $(`style`, o, r),
        title: $(`title`, { title: s, titleAttributes: c }, r),
      }
    );
  },
  Wu = [],
  Gu = !!(
    typeof window < `u` &&
    window.document &&
    window.document.createElement
  ),
  Ku = class {
    instances = [];
    canUseDOM = Gu;
    context;
    value = {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => (this.canUseDOM ? Wu : this.instances),
        add: (e) => {
          (this.canUseDOM ? Wu : this.instances).push(e);
        },
        remove: (e) => {
          let t = (this.canUseDOM ? Wu : this.instances).indexOf(e);
          (this.canUseDOM ? Wu : this.instances).splice(t, 1);
        },
      },
    };
    constructor(e, t) {
      ((this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = Uu({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: ``,
            titleAttributes: {},
          })));
    }
  },
  qu = B.createContext({}),
  Ju = class e extends B.Component {
    static canUseDOM = Gu;
    helmetData;
    constructor(t) {
      (super(t),
        (this.helmetData = new Ku(this.props.context || {}, e.canUseDOM)));
    }
    render() {
      return B.createElement(
        qu.Provider,
        { value: this.helmetData.value },
        this.props.children,
      );
    }
  },
  Yu = (e, t) => {
    let n = document.head || document.querySelector(`head`),
      r = n.querySelectorAll(`${e}[${Q}]`),
      i = [].slice.call(r),
      a = [],
      o;
    return (
      t &&
        t.length &&
        t.forEach((t) => {
          let n = document.createElement(e);
          for (let e in t)
            if (Object.prototype.hasOwnProperty.call(t, e))
              if (e === `innerHTML`) n.innerHTML = t.innerHTML;
              else if (e === `cssText`)
                n.styleSheet
                  ? (n.styleSheet.cssText = t.cssText)
                  : n.appendChild(document.createTextNode(t.cssText));
              else {
                let r = e,
                  i = t[r] === void 0 ? `` : t[r];
                n.setAttribute(e, i);
              }
          (n.setAttribute(Q, `true`),
            i.some((e, t) => ((o = t), n.isEqualNode(e)))
              ? i.splice(o, 1)
              : a.push(n));
        }),
      i.forEach((e) => e.parentNode?.removeChild(e)),
      a.forEach((e) => n.appendChild(e)),
      { oldTags: i, newTags: a }
    );
  },
  Xu = (e, t) => {
    let n = document.getElementsByTagName(e)[0];
    if (!n) return;
    let r = n.getAttribute(Q),
      i = r ? r.split(`,`) : [],
      a = [...i],
      o = Object.keys(t);
    for (let e of o) {
      let r = t[e] || ``;
      (n.getAttribute(e) !== r && n.setAttribute(e, r),
        i.indexOf(e) === -1 && i.push(e));
      let o = a.indexOf(e);
      o !== -1 && a.splice(o, 1);
    }
    for (let e = a.length - 1; e >= 0; --e) n.removeAttribute(a[e]);
    i.length === a.length
      ? n.removeAttribute(Q)
      : n.getAttribute(Q) !== o.join(`,`) && n.setAttribute(Q, o.join(`,`));
  },
  Zu = (e, t) => {
    (e !== void 0 && document.title !== e && (document.title = Au(e)),
      Xu(`title`, t));
  },
  Qu = (e, t) => {
    let {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: i,
      linkTags: a,
      metaTags: o,
      noscriptTags: s,
      onChangeClientState: c,
      scriptTags: l,
      styleTags: u,
      title: d,
      titleAttributes: f,
    } = e;
    (Xu(`body`, r), Xu(`html`, i), Zu(d, f));
    let p = {
        baseTag: Yu(`base`, n),
        linkTags: Yu(`link`, a),
        metaTags: Yu(`meta`, o),
        noscriptTags: Yu(`noscript`, s),
        scriptTags: Yu(`script`, l),
        styleTags: Yu(`style`, u),
      },
      m = {},
      h = {};
    (Object.keys(p).forEach((e) => {
      let { newTags: t, oldTags: n } = p[e];
      (t.length && (m[e] = t), n.length && (h[e] = p[e].oldTags));
    }),
      t && t(),
      c(e, m, h));
  },
  $u = null,
  ed = (e) => {
    ($u && cancelAnimationFrame($u),
      e.defer
        ? ($u = requestAnimationFrame(() => {
            Qu(e, () => {
              $u = null;
            });
          }))
        : (Qu(e), ($u = null)));
  },
  td = class extends B.Component {
    rendered = !1;
    shouldComponentUpdate(e) {
      return !(0, mu.default)(e, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      let { helmetInstances: e } = this.props.context;
      (e.remove(this), this.emitChange());
    }
    emitChange() {
      let { helmetInstances: e, setHelmet: t } = this.props.context,
        n = null,
        r = ku(
          e.get().map((e) => {
            let t = { ...e.props };
            return (delete t.context, t);
          }),
        );
      (Ju.canUseDOM ? ed(r) : Uu && (n = Uu(r)), t(n));
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      let { helmetInstances: e } = this.props.context;
      (e.add(this), this.emitChange());
    }
    render() {
      return (this.init(), null);
    }
  },
  nd = class extends B.Component {
    static defaultProps = {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    };
    shouldComponentUpdate(e) {
      return !(0, fu.default)(
        Nu(this.props, `helmetData`),
        Nu(e, `helmetData`),
      );
    }
    mapNestedChildrenToProps(e, t) {
      if (!t) return null;
      switch (e.type) {
        case `script`:
        case `noscript`:
          return { innerHTML: t };
        case `style`:
          return { cssText: t };
        default:
          throw Error(
            `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
          );
      }
    }
    flattenArrayTypeChildren(e, t, n, r) {
      return {
        ...t,
        [e.type]: [
          ...(t[e.type] || []),
          { ...n, ...this.mapNestedChildrenToProps(e, r) },
        ],
      };
    }
    mapObjectTypeChildren(e, t, n, r) {
      switch (e.type) {
        case `title`:
          return { ...t, [e.type]: r, titleAttributes: { ...n } };
        case `body`:
          return { ...t, bodyAttributes: { ...n } };
        case `html`:
          return { ...t, htmlAttributes: { ...n } };
        default:
          return { ...t, [e.type]: { ...n } };
      }
    }
    mapArrayTypeChildrenToProps(e, t) {
      let n = { ...t };
      return (
        Object.keys(e).forEach((t) => {
          n = { ...n, [t]: e[t] };
        }),
        n
      );
    }
    warnOnInvalidChildren(e, t) {
      return (
        (0, pu.default)(
          _u.some((t) => e.type === t),
          typeof e.type == `function`
            ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.`
            : `Only elements types ${_u.join(`, `)} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`,
        ),
        (0, pu.default)(
          !t ||
            typeof t == `string` ||
            (Array.isArray(t) && !t.some((e) => typeof e != `string`)),
          `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`,
        ),
        !0
      );
    }
    mapChildrenToProps(e, t) {
      let n = {};
      return (
        B.Children.forEach(e, (e) => {
          if (!e || !e.props) return;
          let { children: r, ...i } = e.props,
            a = Object.keys(i).reduce(
              (e, t) => ((e[yu[t] || t] = i[t]), e),
              {},
            ),
            { type: o } = e;
          switch (
            (typeof o == `symbol`
              ? (o = o.toString())
              : this.warnOnInvalidChildren(e, r),
            o)
          ) {
            case `Symbol(react.fragment)`:
              t = this.mapChildrenToProps(r, t);
              break;
            case `link`:
            case `meta`:
            case `noscript`:
            case `script`:
            case `style`:
              n = this.flattenArrayTypeChildren(e, n, a, r);
              break;
            default:
              t = this.mapObjectTypeChildren(e, t, a, r);
              break;
          }
        }),
        this.mapArrayTypeChildrenToProps(n, t)
      );
    }
    render() {
      let { children: e, ...t } = this.props,
        n = { ...t },
        { helmetData: r } = t;
      return (
        e && (n = this.mapChildrenToProps(e, n)),
        r &&
          !(r instanceof Ku) &&
          ((r = new Ku(r.context, !0)), delete n.helmetData),
        r
          ? B.createElement(td, { ...n, context: r.value })
          : B.createElement(qu.Consumer, null, (e) =>
              B.createElement(td, { ...n, context: e }),
            )
      );
    }
  };
console.log(`Main entry point executing`);
try {
  let e = document.getElementById(`root`);
  if (!e) throw Error(`Root element not found`);
  ((0, Qe.createRoot)(e).render(
    (0, V.jsx)(Ju, { children: (0, V.jsx)(cu, {}) }),
  ),
    console.log(`React app mounted successfully`));
} catch (e) {
  console.error(`Error mounting React app:`, e);
}
export {
  Fl as a,
  Ol as c,
  El as d,
  pl as f,
  ut as h,
  X as i,
  bl as l,
  Pn as m,
  Nl as n,
  Pl as o,
  dl as p,
  Rl as r,
  Y as s,
  nd as t,
  Cl as u,
};
