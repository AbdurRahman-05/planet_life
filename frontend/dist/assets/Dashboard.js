import { a as e } from "./rolldown-runtime.js";
import { s as t, v as n, x as r } from "./vendor-react.js";
import { i, n as a, r as o } from "./AdminContext.js";
import {
  E as s,
  S as c,
  a as l,
  c as u,
  d,
  j as f,
  k as p,
  l as m,
  r as h,
  w as g,
  y as _,
} from "./lucide-react.js";
import { c as v, f as y, h as b, s as x } from "./index.js";
import { t as S } from "./storyImages.js";
import { i as C, n as w, r as T, t as E } from "./card.js";
import { t as D } from "./textarea.js";
import { i as O, n as k, r as A, t as j } from "./tabs.js";
var M = e(r(), 1),
  N = n(),
  P = ({ packages: e, onChange: t }) => {
    let n = () => {
      let n = {
        id: `pkg-${Date.now()}`,
        duration: ``,
        nights: 0,
        days: 0,
        price: 0,
        inclusions: [],
        itinerary: [],
      };
      t([...e, n]);
    },
      r = (n) => {
        let r = [...e];
        (r.splice(n, 1), t(r));
      },
      a = (n, r, i) => {
        let a = [...e];
        ((a[n] = { ...a[n], [r]: i }), t(a));
      },
      o = (n) => {
        let r = [...e];
        (r[n].inclusions.push(``), t(r));
      },
      s = (n, r, i) => {
        let a = [...e];
        ((a[n].inclusions[r] = i), t(a));
      },
      c = (n, r) => {
        let i = [...e];
        (i[n].inclusions.splice(r, 1), t(i));
      },
      l = (n) => {
        let r = [...e],
          i = {
            day: (r[n].itinerary?.length || 0) + 1,
            title: ``,
            description: ``,
            activities: [],
          };
        ((r[n].itinerary = [...(r[n].itinerary || []), i]), t(r));
      },
      d = (n, r, i, a) => {
        let o = [...e];
        o[n].itinerary &&
          ((o[n].itinerary[r] = { ...o[n].itinerary[r], [i]: a }), t(o));
      },
      f = (n, r) => {
        let i = [...e];
        i[n].itinerary &&
          (i[n].itinerary.splice(r, 1),
            (i[n].itinerary = i[n].itinerary.map((e, t) => ({
              ...e,
              day: t + 1,
            }))),
            t(i));
      },
      p = (n, r) => {
        let i = [...e];
        i[n].itinerary && (i[n].itinerary[r].activities.push(``), t(i));
      },
      m = (n, r, i, a) => {
        let o = [...e];
        o[n].itinerary && ((o[n].itinerary[r].activities[i] = a), t(o));
      },
      h = (n, r, i) => {
        let a = [...e];
        a[n].itinerary && (a[n].itinerary[r].activities.splice(i, 1), t(a));
      };
    return (0, N.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, N.jsxs)(`div`, {
          className: `flex justify-between items-center`,
          children: [
            (0, N.jsx)(x, {
              className: `text-lg font-semibold`,
              children: `Packages`,
            }),
            (0, N.jsxs)(i, {
              type: `button`,
              onClick: n,
              size: `sm`,
              children: [
                (0, N.jsx)(_, { className: `h-4 w-4 mr-2` }),
                ` Add Package`,
              ],
            }),
          ],
        }),
        e.map((e, t) =>
          (0, N.jsxs)(
            E,
            {
              className: `border-l-4 border-l-primary`,
              children: [
                (0, N.jsxs)(T, {
                  className: `py-3 px-4 bg-muted/50 flex flex-row items-center justify-between`,
                  children: [
                    (0, N.jsxs)(C, {
                      className: `text-base`,
                      children: [e.duration || `New Package`, ` - ₹`, e.price],
                    }),
                    (0, N.jsx)(i, {
                      type: `button`,
                      variant: `ghost`,
                      size: `sm`,
                      onClick: () => r(t),
                      className: `text-destructive hover:text-destructive`,
                      children: (0, N.jsx)(u, { className: `h-4 w-4` }),
                    }),
                  ],
                }),
                (0, N.jsxs)(w, {
                  className: `p-4 space-y-4`,
                  children: [
                    (0, N.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-4`,
                      children: [
                        (0, N.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, N.jsx)(x, {
                              children: `Duration (e.g., 3 Nights 4 Days)`,
                            }),
                            (0, N.jsx)(v, {
                              value: e.duration,
                              onChange: (e) => a(t, `duration`, e.target.value),
                            }),
                          ],
                        }),
                        (0, N.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, N.jsx)(x, { children: `Price (₹)` }),
                            (0, N.jsx)(v, {
                              type: `number`,
                              value: e.price,
                              onChange: (e) =>
                                a(t, `price`, parseInt(e.target.value) || 0),
                            }),
                          ],
                        }),
                        (0, N.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, N.jsx)(x, { children: `Nights` }),
                            (0, N.jsx)(v, {
                              type: `number`,
                              value: e.nights,
                              onChange: (e) =>
                                a(t, `nights`, parseInt(e.target.value) || 0),
                            }),
                          ],
                        }),
                        (0, N.jsxs)(`div`, {
                          className: `space-y-2`,
                          children: [
                            (0, N.jsx)(x, { children: `Days` }),
                            (0, N.jsx)(v, {
                              type: `number`,
                              value: e.days,
                              onChange: (e) =>
                                a(t, `days`, parseInt(e.target.value) || 0),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, N.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        (0, N.jsx)(x, { children: `Inclusions` }),
                        e.inclusions.map((e, n) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex gap-2`,
                              children: [
                                (0, N.jsx)(v, {
                                  value: e,
                                  onChange: (e) => s(t, n, e.target.value),
                                }),
                                (0, N.jsx)(i, {
                                  type: `button`,
                                  variant: `ghost`,
                                  size: `icon`,
                                  onClick: () => c(t, n),
                                  children: (0, N.jsx)(u, {
                                    className: `h-4 w-4`,
                                  }),
                                }),
                              ],
                            },
                            n,
                          ),
                        ),
                        (0, N.jsxs)(i, {
                          type: `button`,
                          variant: `outline`,
                          size: `sm`,
                          onClick: () => o(t),
                          children: [
                            (0, N.jsx)(_, { className: `h-3 w-3 mr-2` }),
                            ` Add Inclusion`,
                          ],
                        }),
                      ],
                    }),
                    (0, N.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        (0, N.jsx)(x, {
                          className: `text-base font-semibold`,
                          children: `Itinerary`,
                        }),
                        e.itinerary?.map((e, n) =>
                          (0, N.jsx)(
                            E,
                            {
                              className: `bg-muted/20`,
                              children: (0, N.jsxs)(w, {
                                className: `p-3 space-y-3`,
                                children: [
                                  (0, N.jsxs)(`div`, {
                                    className: `flex justify-between items-center`,
                                    children: [
                                      (0, N.jsxs)(`span`, {
                                        className: `font-medium`,
                                        children: [`Day `, e.day],
                                      }),
                                      (0, N.jsx)(i, {
                                        type: `button`,
                                        variant: `ghost`,
                                        size: `sm`,
                                        onClick: () => f(t, n),
                                        children: (0, N.jsx)(u, {
                                          className: `h-3 w-3`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, N.jsx)(v, {
                                    placeholder: `Title (e.g., Arrival)`,
                                    value: e.title,
                                    onChange: (e) =>
                                      d(t, n, `title`, e.target.value),
                                  }),
                                  (0, N.jsx)(D, {
                                    placeholder: `Description`,
                                    value: e.description,
                                    onChange: (e) =>
                                      d(t, n, `description`, e.target.value),
                                  }),
                                  (0, N.jsxs)(`div`, {
                                    className: `pl-4 border-l-2 border-primary/20 space-y-2`,
                                    children: [
                                      (0, N.jsx)(x, {
                                        className: `text-xs text-muted-foreground`,
                                        children: `Activities`,
                                      }),
                                      e.activities.map((e, r) =>
                                        (0, N.jsxs)(
                                          `div`,
                                          {
                                            className: `flex gap-2`,
                                            children: [
                                              (0, N.jsx)(v, {
                                                className: `h-8 text-sm`,
                                                value: e,
                                                onChange: (e) =>
                                                  m(t, n, r, e.target.value),
                                              }),
                                              (0, N.jsx)(i, {
                                                type: `button`,
                                                variant: `ghost`,
                                                size: `icon`,
                                                className: `h-8 w-8`,
                                                onClick: () => h(t, n, r),
                                                children: (0, N.jsx)(u, {
                                                  className: `h-3 w-3`,
                                                }),
                                              }),
                                            ],
                                          },
                                          r,
                                        ),
                                      ),
                                      (0, N.jsxs)(i, {
                                        type: `button`,
                                        variant: `ghost`,
                                        size: `sm`,
                                        className: `h-6 text-xs`,
                                        onClick: () => p(t, n),
                                        children: [
                                          (0, N.jsx)(_, {
                                            className: `h-3 w-3 mr-1`,
                                          }),
                                          ` Add Activity`,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            n,
                          ),
                        ),
                        (0, N.jsxs)(i, {
                          type: `button`,
                          variant: `outline`,
                          size: `sm`,
                          onClick: () => l(t),
                          children: [
                            (0, N.jsx)(_, { className: `h-3 w-3 mr-2` }),
                            ` Add Day`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            e.id || t,
          ),
        ),
      ],
    });
  },
  F = ({
    onUpload: e,
    folder: t = `planet_life/images`,
    defaultImage: n,
    className: r = ``,
  }) => {
    let [a, c] = (0, M.useState)(!1),
      [u, d] = (0, M.useState)(n || null),
      f = (0, M.useRef)(null),
      p = async (r) => {
        let i = r.target.files?.[0];
        if (i) {
          if (i.size > 5e7) {
            alert(`File is too large. Please choose an image under 50MB.`);
            return;
          }
          try {
            c(!0);
            let n = localStorage.getItem(`adminToken`);
            if (!n) throw Error(`No admin token found`);
            d(URL.createObjectURL(i));
            let r = await o.upload(i, t, n);
            (e(r.url), d(r.url));
          } catch (e) {
            (console.error(`Upload failed`, e),
              alert(`Upload failed. Please try again.`),
              d(n || null));
          } finally {
            (c(!1), f.current && (f.current.value = ``));
          }
        }
      },
      m = () => {
        (d(null), e(``));
      },
      g =
        u?.endsWith(`.mp4`) ||
        u?.endsWith(`.mov`) ||
        u?.includes(`video/upload`);
    return (0, N.jsx)(`div`, {
      className: `space-y-4 ${r}`,
      children: u
        ? (0, N.jsxs)(`div`, {
          className: `relative rounded-md overflow-hidden border w-full aspect-video bg-muted flex items-center justify-center`,
          children: [
            g
              ? (0, N.jsx)(`video`, {
                src: u,
                controls: !0,
                className: `w-full h-full object-cover`,
              })
              : (0, N.jsx)(`img`, {
                src: u,
                alt: `Preview`,
                className: `w-full h-full object-cover`,
              }),
            (0, N.jsx)(i, {
              type: `button`,
              variant: `destructive`,
              size: `icon`,
              className: `absolute top-2 right-2 rounded-full w-8 h-8 opacity-80 hover:opacity-100`,
              onClick: m,
              disabled: a,
              children: (0, N.jsx)(h, { className: `h-4 w-4` }),
            }),
            a &&
            (0, N.jsxs)(`div`, {
              className: `absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white`,
              children: [
                (0, N.jsx)(s, { className: `h-8 w-8 animate-spin mb-2` }),
                (0, N.jsx)(`span`, {
                  className: `text-sm font-medium`,
                  children: `Uploading to Cloudinary...`,
                }),
              ],
            }),
          ],
        })
        : (0, N.jsxs)(`div`, {
          className: `relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 bg-muted/50 hover:bg-muted transition-colors`,
          children: [
            (0, N.jsx)(l, { className: `h-8 w-8 text-muted-foreground` }),
            (0, N.jsx)(`div`, {
              className: `text-sm font-medium`,
              children: `Click or drag file to upload`,
            }),
            (0, N.jsx)(`div`, {
              className: `text-xs text-muted-foreground`,
              children: `Supports JPG, PNG, WEBP, MP4 (max 50MB)`,
            }),
            (0, N.jsx)(`input`, {
              ref: f,
              type: `file`,
              className: `absolute inset-0 w-full h-full opacity-0 cursor-pointer`,
              accept: `image/*,video/*`,
              onChange: p,
              disabled: a,
            }),
            a &&
            (0, N.jsx)(`div`, {
              className: `absolute inset-0 bg-background/80 flex items-center justify-center`,
              children: (0, N.jsx)(s, {
                className: `h-6 w-6 animate-spin text-primary`,
              }),
            }),
          ],
        }),
    });
  },
  I = ({ initialData: e, onSubmit: t, onCancel: n }) => {
    let [r, a] = (0, M.useState)({
      id: ``,
      name: ``,
      country: ``,
      description: ``,
      image: ``,
      video: ``,
      featured: !1,
      whyVisit: [],
      packages: [],
    }),
      [c, d] = (0, M.useState)(!1),
      { toast: f } = b();
    (0, M.useEffect)(() => {
      e && a(e);
    }, [e]);
    let m = async (e) => {
      let t = e.target.files?.[0];
      if (!t) return;
      let n = localStorage.getItem(`adminToken`) || ``;
      if (!n) {
        f({
          title: `Authentication Error`,
          description: `You must be logged in as an administrator to use this feature.`,
          variant: `destructive`,
        });
        return;
      }
      d(!0);
      try {
        let e = await o.parsePackageDocument(t, n);
        if (e && e.success && e.data) {
          let t = e.data,
            n = (t.packages || []).map((e, t) => ({
              ...e,
              id: e.id || `pkg-${Date.now()}-${t}`,
            }));
          (a((e) => ({
            ...e,
            id: t.id || e.id,
            name: t.name || e.name,
            country: t.country || e.country,
            description: t.description || e.description,
            whyVisit: t.whyVisit || e.whyVisit,
            packages: n.length > 0 ? n : e.packages,
          })),
            f({
              title: `Import Successful!`,
              description: `Extracted details for "${t.name || `new package`}" successfully.`,
            }));
        } else throw Error(`Invalid response format received from server.`);
      } catch (e) {
        f({
          title: `Import Failed`,
          description:
            e.message || `An error occurred while parsing the document.`,
          variant: `destructive`,
        });
      } finally {
        (d(!1), (e.target.value = ``));
      }
    },
      h = (e) => {
        let { name: t, value: n } = e.target;
        a((e) => ({ ...e, [t]: n }));
      },
      g = () => {
        a((e) => ({ ...e, whyVisit: [...e.whyVisit, ``] }));
      },
      y = (e, t) => {
        let n = [...r.whyVisit];
        ((n[e] = t), a((e) => ({ ...e, whyVisit: n })));
      },
      S = (e) => {
        let t = [...r.whyVisit];
        (t.splice(e, 1), a((e) => ({ ...e, whyVisit: t })));
      };
    return (0, N.jsxs)(E, {
      className: `w-full max-w-4xl mx-auto`,
      children: [
        (0, N.jsx)(T, {
          children: (0, N.jsx)(C, {
            children: e ? `Edit Destination` : `Add New Destination`,
          }),
        }),
        (0, N.jsx)(w, {
          children: (0, N.jsxs)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(), t(r));
            },
            className: `space-y-8`,
            children: [
              !e &&
              (0, N.jsxs)(`div`, {
                className: `bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3`,
                children: [
                  (0, N.jsxs)(`div`, {
                    className: `flex items-center space-x-2 text-primary`,
                    children: [
                      (0, N.jsx)(p, { className: `h-5 w-5` }),
                      (0, N.jsx)(`h4`, {
                        className: `font-bold text-sm`,
                        children: `AI-Powered Package Import`,
                      }),
                    ],
                  }),
                  (0, N.jsx)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: `Upload a Word document (.docx), PDF (.pdf), or Text file (.txt) containing your package details (itinerary, inclusions, price, etc.) to automatically populate this form.`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `flex items-center gap-4`,
                    children: [
                      (0, N.jsx)(v, {
                        id: `import-doc`,
                        type: `file`,
                        accept: `.docx,.pdf,.txt`,
                        className: `hidden`,
                        onChange: m,
                        disabled: c,
                      }),
                      (0, N.jsx)(i, {
                        type: `button`,
                        variant: `outline`,
                        size: `sm`,
                        disabled: c,
                        onClick: () =>
                          document.getElementById(`import-doc`)?.click(),
                        children: c
                          ? (0, N.jsxs)(N.Fragment, {
                            children: [
                              (0, N.jsx)(s, {
                                className: `mr-2 h-4 w-4 animate-spin`,
                              }),
                              `Analyzing Document...`,
                            ],
                          })
                          : (0, N.jsxs)(N.Fragment, {
                            children: [
                              (0, N.jsx)(l, { className: `mr-2 h-4 w-4` }),
                              `Upload Package Document`,
                            ],
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold border-b pb-2`,
                    children: `Basic Information`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                    children: [
                      (0, N.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, N.jsx)(x, {
                            htmlFor: `id`,
                            children: `ID (Unique)`,
                          }),
                          (0, N.jsx)(v, {
                            id: `id`,
                            name: `id`,
                            value: r.id,
                            onChange: h,
                            disabled: !!e,
                            required: !0,
                            placeholder: `e.g., paris`,
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, N.jsx)(x, { htmlFor: `name`, children: `Name` }),
                          (0, N.jsx)(v, {
                            id: `name`,
                            name: `name`,
                            value: r.name,
                            onChange: h,
                            required: !0,
                            placeholder: `e.g., Paris`,
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, N.jsx)(x, {
                            htmlFor: `country`,
                            children: `Country`,
                          }),
                          (0, N.jsx)(v, {
                            id: `country`,
                            name: `country`,
                            value: r.country,
                            onChange: h,
                            required: !0,
                            placeholder: `e.g., France`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `description`,
                        children: `Description`,
                      }),
                      (0, N.jsx)(D, {
                        id: `description`,
                        name: `description`,
                        value: r.description,
                        onChange: h,
                        required: !0,
                        rows: 4,
                        placeholder: `Brief overview of the destination...`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold border-b pb-2`,
                    children: `Media`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-6`,
                    children: [
                      (0, N.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, N.jsx)(x, {
                            children: `Destination Image (Main)`,
                          }),
                          (0, N.jsx)(F, {
                            onUpload: (e) => a((t) => ({ ...t, image: e })),
                            defaultImage: r.image,
                            folder: `planet_life/images`,
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, N.jsx)(x, { children: `Video URL` }),
                          (0, N.jsx)(F, {
                            onUpload: (e) => a((t) => ({ ...t, video: e })),
                            defaultImage: r.video,
                            folder: `planet_life/videos`,
                          }),
                          (0, N.jsx)(`p`, {
                            className: `text-xs text-muted-foreground mt-2`,
                            children: `Alternatively, you can provide a direct link to an MP4 video file.`,
                          }),
                          (0, N.jsx)(v, {
                            id: `video`,
                            name: `video`,
                            value: r.video || ``,
                            onChange: h,
                            placeholder: `https://example.com/video.mp4`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsxs)(`div`, {
                    className: `flex justify-between items-center border-b pb-2`,
                    children: [
                      (0, N.jsx)(`h3`, {
                        className: `text-lg font-semibold`,
                        children: `Why Visit?`,
                      }),
                      (0, N.jsxs)(i, {
                        type: `button`,
                        variant: `outline`,
                        size: `sm`,
                        onClick: g,
                        children: [
                          (0, N.jsx)(_, { className: `h-4 w-4 mr-2` }),
                          ` Add Reason`,
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      r.whyVisit.map((e, t) =>
                        (0, N.jsxs)(
                          `div`,
                          {
                            className: `flex gap-2`,
                            children: [
                              (0, N.jsx)(v, {
                                value: e,
                                onChange: (e) => y(t, e.target.value),
                                placeholder: `e.g., Experience the Eiffel Tower`,
                              }),
                              (0, N.jsx)(i, {
                                type: `button`,
                                variant: `ghost`,
                                size: `icon`,
                                onClick: () => S(t),
                                children: (0, N.jsx)(u, {
                                  className: `h-4 w-4`,
                                }),
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                      r.whyVisit.length === 0 &&
                      (0, N.jsx)(`p`, {
                        className: `text-sm text-muted-foreground italic`,
                        children: `No reasons added yet.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold border-b pb-2`,
                    children: `Available Packages`,
                  }),
                  (0, N.jsx)(P, {
                    packages: r.packages,
                    onChange: (e) => a((t) => ({ ...t, packages: e })),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `flex justify-end space-x-4 pt-6 border-t`,
                children: [
                  (0, N.jsx)(i, {
                    type: `button`,
                    variant: `outline`,
                    onClick: n,
                    size: `lg`,
                    children: `Cancel`,
                  }),
                  (0, N.jsx)(i, {
                    type: `submit`,
                    size: `lg`,
                    children: e ? `Update Destination` : `Add Destination`,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  L = (e) =>
    e.startsWith(`http`) || e.startsWith(`/`) ? e : `/img/stories/${e}`,
  R = () => {
    let { homeContent: e, updateHomeContent: t } = a(),
      [n, r] = (0, M.useState)(e),
      { toast: o } = b(),
      [s, c] = (0, M.useState)(null),
      [l, f] = (0, M.useState)({
        title: ``,
        image: ``,
        date: ``,
        price: ``,
        month: ``,
        note: ``,
        link: ``,
        status: void 0,
      }),
      [p, m] = (0, M.useState)(!1),
      [h, g] = (0, M.useState)(null),
      [O, k] = (0, M.useState)({ id: ``, name: ``, text: `` }),
      [A, j] = (0, M.useState)(!1),
      [companyIdx, setCompanyIdx] = (0, M.useState)(null),
      [companyForm, setCompanyForm] = (0, M.useState)({ name: ``, logo: `` }),
      [showCompanyForm, setShowCompanyForm] = (0, M.useState)(!1);
    (0, M.useEffect)(() => {
      if (e) {
        let initializedHome = { ...e };
        if (!initializedHome.trustedCompanies) {
          initializedHome.trustedTitle = e.trustedTitle || `Trusted By Leading Organizations`;
          initializedHome.trustedSubtitle = e.trustedSubtitle || `We engineer seamless, ultra-premium travel operations for global industry pioneers. Empowering enterprises with bespoke execution and 24/7 VIP desk support.`;
          initializedHome.trustedCompanies = [
            { name: "ARUTHRS NATYALAYA", logo: "/assets/images/arudhes.png" },
            { name: "ASK JEWELLERY", logo: "/assets/images/ask_jewellery.png" },
            { name: "DIVA SECRET INTERNATIONAL", logo: "/assets/images/diva_secret.png" },
            { name: "DR AGARWALS HOSPITALS", logo: "/assets/images/images-removebg-preview.png" },
            { name: "GVG INFRASTRUCTURE", logo: "/assets/images/image.png" },
            { name: "GWC DATA AI", logo: "/assets/images/gwc_data ai.png" },
            { name: "NEW TECH CHENNAI", logo: "/assets/images/new_tech_chennai.png" },
            { name: "SUPREME ELECTRO CONTROL", logo: "/assets/images/supreme_electro_control.png" },
            { name: "ZOHO", logo: "/assets/images/zoho.png" }
          ];
        }
        r(initializedHome);
      }
    }, [e]);
    let P = (e) => {
      let { name: t, value: n } = e.target;
      r((e) => ({ ...e, [t]: n }));
    },
      I = () => {
        (c(null),
          f({
            title: ``,
            image: ``,
            date: ``,
            price: ``,
            month: ``,
            note: ``,
            link: ``,
            status: void 0,
          }),
          m(!0));
      },
      R = (e) => {
        (c(e.id), f(e), m(!0));
      },
      z = (e) => {
        if (window.confirm(`Are you sure you want to delete this package?`)) {
          let t = (n.strangerTrips || []).filter((t) => t.id !== e);
          r((e) => ({ ...e, strangerTrips: t }));
        }
      },
      B = (e) => {
        if (
          (e.preventDefault(),
            !l.title || !l.image || !l.date || !l.price || !l.month || !l.link)
        ) {
          alert(`Please fill in all required fields (marked with *).`);
          return;
        }
        let t = [...(n.strangerTrips || [])];
        if (s) {
          let e = t.findIndex((e) => e.id === s);
          e !== -1 && (t[e] = { ...l, id: s });
        } else t.push({ ...l, id: `stranger-${Date.now()}` });
        (r((e) => ({ ...e, strangerTrips: t })), m(!1), c(null));
      },
      V = () => {
        (g(null), k({ id: ``, name: ``, text: `` }), j(!0));
      },
      H = (e) => {
        (g(e),
          k(n.reviews ? n.reviews[e] : { id: ``, name: ``, text: `` }),
          j(!0));
      },
      U = (e) => {
        if (window.confirm(`Are you sure you want to delete this review?`)) {
          let t = [...(n.reviews || [])];
          (t.splice(e, 1), r((e) => ({ ...e, reviews: t })));
        }
      },
      W = (e) => {
        if ((e.preventDefault(), !O.name || !O.text)) {
          alert(`Please fill in both name and review text.`);
          return;
        }
        let t = [...(n.reviews || [])];
        (h === null
          ? t.push({ ...O, id: `rev-${Date.now()}` })
          : (t[h] = { ...O, id: O.id || `rev-${Date.now()}` }),
          r((e) => ({ ...e, reviews: t })),
          j(!1),
          g(null));
      },
      G = (e) => {
        if (!e) return;
        let t =
          n.communityImages && n.communityImages.length > 0
            ? n.communityImages
            : S;
        r((n) => ({ ...n, communityImages: [...t, e] }));
      },
      K = (e) => {
        let t =
          n.communityImages && n.communityImages.length > 0
            ? n.communityImages
            : S;
        r((n) => ({ ...n, communityImages: t.filter((t, n) => n !== e) }));
      };
    return (0, N.jsxs)(E, {
      children: [
        (0, N.jsx)(T, {
          children: (0, N.jsx)(C, { children: `Edit Home Page Content` }),
        }),
        (0, N.jsx)(w, {
          children: (0, N.jsxs)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(),
                t(n),
                o({
                  title: `Home Page Updated`,
                  description: `Changes have been saved successfully.`,
                }));
            },
            className: `space-y-6`,
            children: [
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Hero Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroTitle`,
                        children: `Hero Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `heroTitle`,
                        name: `heroTitle`,
                        value: n.heroTitle || ``,
                        onChange: P,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroSubtitle`,
                        children: `Hero Subtitle`,
                      }),
                      (0, N.jsx)(D, {
                        id: `heroSubtitle`,
                        name: `heroSubtitle`,
                        value: n.heroSubtitle || ``,
                        onChange: P,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                    children: [
                      (0, N.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, N.jsx)(x, { children: `Header Logo` }),
                          (0, N.jsx)(F, {
                            onUpload: (e) => r((t) => ({ ...t, logoUrl: e })),
                            defaultImage: n.logoUrl ? y(n.logoUrl) : null,
                            folder: `planet_life/brand`,
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, N.jsx)(x, { children: `Hero Background Video` }),
                          (0, N.jsx)(F, {
                            onUpload: (e) => r((t) => ({ ...t, heroVideo: e })),
                            defaultImage: n.heroVideo ? y(n.heroVideo) : null,
                            folder: `planet_life/brand`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, N.jsx)(`h3`, {
                        className: `text-lg font-semibold`,
                        children: `Stranger Trips Section`,
                      }),
                      !p &&
                      (0, N.jsxs)(i, {
                        type: `button`,
                        onClick: I,
                        size: `sm`,
                        children: [
                          (0, N.jsx)(_, { className: `mr-2 h-4 w-4` }),
                          ` Add Package`,
                        ],
                      }),
                    ],
                  }),
                  p &&
                  (0, N.jsxs)(E, {
                    className: `border-2 border-primary/20 bg-muted/30`,
                    children: [
                      (0, N.jsx)(T, {
                        children: (0, N.jsx)(C, {
                          className: `text-base font-bold`,
                          children: s
                            ? `Edit Stranger Package`
                            : `Add Stranger Package`,
                        }),
                      }),
                      (0, N.jsxs)(w, {
                        className: `space-y-4`,
                        children: [
                          (0, N.jsxs)(`div`, {
                            className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                            children: [
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `pkg-title`,
                                    children: `Package Title *`,
                                  }),
                                  (0, N.jsx)(v, {
                                    id: `pkg-title`,
                                    value: l.title || ``,
                                    onChange: (e) =>
                                      f((t) => ({
                                        ...t,
                                        title: e.target.value,
                                      })),
                                    placeholder: `e.g. Kashmir Strangers Tour`,
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `pkg-month`,
                                    children: `Travel Month *`,
                                  }),
                                  (0, N.jsx)(v, {
                                    id: `pkg-month`,
                                    value: l.month || ``,
                                    onChange: (e) =>
                                      f((t) => ({
                                        ...t,
                                        month: e.target.value,
                                      })),
                                    placeholder: `e.g. January`,
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `pkg-date`,
                                    children: `Travel Dates *`,
                                  }),
                                  (0, N.jsx)(v, {
                                    id: `pkg-date`,
                                    value: l.date || ``,
                                    onChange: (e) =>
                                      f((t) => ({
                                        ...t,
                                        date: e.target.value,
                                      })),
                                    placeholder: `e.g. Jan 10-18, 2026`,
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `pkg-price`,
                                    children: `Price *`,
                                  }),
                                  (0, N.jsx)(v, {
                                    id: `pkg-price`,
                                    value: l.price || ``,
                                    onChange: (e) =>
                                      f((t) => ({
                                        ...t,
                                        price: e.target.value,
                                      })),
                                    placeholder: `e.g. ₹14,999`,
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `pkg-note`,
                                    children: `Note (Optional)`,
                                  }),
                                  (0, N.jsx)(v, {
                                    id: `pkg-note`,
                                    value: l.note || ``,
                                    onChange: (e) =>
                                      f((t) => ({
                                        ...t,
                                        note: e.target.value,
                                      })),
                                    placeholder: `e.g. Flight Excl.`,
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `pkg-link`,
                                    children: `Package Link *`,
                                  }),
                                  (0, N.jsx)(v, {
                                    id: `pkg-link`,
                                    value: l.link || ``,
                                    onChange: (e) =>
                                      f((t) => ({
                                        ...t,
                                        link: e.target.value,
                                      })),
                                    placeholder: `e.g. /destination/kashmir?pkg=kashmir-strangers-4n5d`,
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `pkg-status`,
                                    children: `Trip Status`,
                                  }),
                                  (0, N.jsxs)(`select`, {
                                    id: `pkg-status`,
                                    value: l.status || ``,
                                    onChange: (e) =>
                                      f((t) => ({
                                        ...t,
                                        status: e.target.value,
                                      })),
                                    className: `w-full bg-white border border-gray-200 rounded-md p-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20`,
                                    children: [
                                      (0, N.jsx)(`option`, {
                                        value: ``,
                                        children: `Select Status (Optional)`,
                                      }),
                                      (0, N.jsx)(`option`, {
                                        value: `upcoming`,
                                        children: `Upcoming`,
                                      }),
                                      (0, N.jsx)(`option`, {
                                        value: `finished`,
                                        children: `Finished`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, { children: `Package Image *` }),
                              (0, N.jsx)(F, {
                                onUpload: (e) =>
                                  f((t) => ({ ...t, image: e })),
                                defaultImage: l.image,
                                folder: `planet_life/stranger_trips`,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `flex gap-2 justify-end pt-2`,
                            children: [
                              (0, N.jsx)(i, {
                                type: `button`,
                                variant: `outline`,
                                onClick: () => m(!1),
                                children: `Cancel`,
                              }),
                              (0, N.jsx)(i, {
                                type: `button`,
                                onClick: B,
                                children: s
                                  ? `Update Package`
                                  : `Add Package`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid gap-4 mt-2`,
                    children:
                      (n.strangerTrips || []).length === 0
                        ? (0, N.jsx)(`p`, {
                          className: `text-sm text-muted-foreground py-4 text-center`,
                          children: `No packages added. Default packages will be shown on the home page.`,
                        })
                        : (n.strangerTrips || []).map((e) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex items-center justify-between p-4 border rounded-lg bg-card text-card-foreground shadow-sm`,
                              children: [
                                (0, N.jsxs)(`div`, {
                                  className: `flex items-center gap-4`,
                                  children: [
                                    (0, N.jsx)(`img`, {
                                      src: y(e.image),
                                      alt: e.title,
                                      className: `w-16 h-16 object-cover rounded bg-muted`,
                                    }),
                                    (0, N.jsxs)(`div`, {
                                      children: [
                                        (0, N.jsx)(`h4`, {
                                          className: `font-bold text-sm`,
                                          children: e.title,
                                        }),
                                        (0, N.jsxs)(`p`, {
                                          className: `text-xs text-muted-foreground`,
                                          children: [
                                            e.month,
                                            ` | `,
                                            e.date,
                                            ` | `,
                                            e.price,
                                            e.status &&
                                            (0, N.jsx)(`span`, {
                                              className: `ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${e.status === `upcoming` ? `bg-emerald-100 text-emerald-800` : `bg-zinc-100 text-zinc-800`}`,
                                              children: e.status,
                                            }),
                                          ],
                                        }),
                                        e.note &&
                                        (0, N.jsx)(`span`, {
                                          className: `text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold`,
                                          children: e.note,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)(`div`, {
                                  className: `flex gap-2`,
                                  children: [
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `outline`,
                                      size: `sm`,
                                      onClick: () => R(e),
                                      children: [
                                        (0, N.jsx)(d, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Edit`,
                                      ],
                                    }),
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `destructive`,
                                      size: `sm`,
                                      onClick: () => z(e.id),
                                      children: [
                                        (0, N.jsx)(u, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Delete`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Trending Destinations Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `destinationsTitle`,
                        children: `Section Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `destinationsTitle`,
                        name: `destinationsTitle`,
                        value: n.destinationsTitle || ``,
                        onChange: P,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `destinationsSubtitle`,
                        children: `Section Subtitle`,
                      }),
                      (0, N.jsx)(D, {
                        id: `destinationsSubtitle`,
                        name: `destinationsSubtitle`,
                        value: n.destinationsSubtitle || ``,
                        onChange: P,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Community Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `communityTitle`,
                        children: `Community Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `communityTitle`,
                        name: `communityTitle`,
                        value: n.communityTitle || ``,
                        onChange: P,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `communitySubtitle`,
                        children: `Community Subtitle`,
                      }),
                      (0, N.jsx)(D, {
                        id: `communitySubtitle`,
                        name: `communitySubtitle`,
                        value: n.communitySubtitle || ``,
                        onChange: P,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-4 pt-4 border-t`,
                    children: [
                      (0, N.jsx)(x, {
                        className: `text-base font-medium`,
                        children: `Community Images (Happy Customers / Stories)`,
                      }),
                      (0, N.jsx)(`div`, {
                        className: `grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 max-h-[400px] overflow-y-auto p-2 border rounded-lg bg-muted/10`,
                        children: (n.communityImages &&
                          n.communityImages.length > 0
                          ? n.communityImages
                          : S
                        ).map((e, t) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `relative aspect-[4/5] rounded-lg overflow-hidden border bg-muted group shadow-sm`,
                              children: [
                                (0, N.jsx)(`img`, {
                                  src: L(e),
                                  alt: `Community Story ${t + 1}`,
                                  className: `w-full h-full object-cover`,
                                  loading: `lazy`,
                                }),
                                (0, N.jsx)(i, {
                                  type: `button`,
                                  variant: `destructive`,
                                  size: `icon`,
                                  className: `absolute top-1 right-1 rounded-full w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200`,
                                  onClick: () => K(t),
                                  children: (0, N.jsx)(u, {
                                    className: `h-3.5 w-3.5`,
                                  }),
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                      !n.communityImages || n.communityImages.length === 0
                        ? (0, N.jsx)(`div`, {
                          className: `text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg border border-dashed`,
                          children: `Showing the 48 default WhatsApp stories. Any delete or upload action will create your custom community images list.`,
                        })
                        : (0, N.jsxs)(`div`, {
                          className: `text-xs text-green-600 bg-green-50/50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-900/30`,
                          children: [
                            `Showing `,
                            n.communityImages.length,
                            ` custom community images.`,
                          ],
                        }),
                      (0, N.jsxs)(`div`, {
                        className: `max-w-sm mt-2`,
                        children: [
                          (0, N.jsx)(x, {
                            className: `text-sm text-muted-foreground mb-1 block`,
                            children: `Upload New Story Image`,
                          }),
                          (0, N.jsx)(
                            F,
                            { onUpload: G, folder: `planet_life/stories` },
                            n.communityImages?.length || 0,
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, N.jsx)(`h3`, {
                        className: `text-lg font-semibold`,
                        children: `Google Reviews Section`,
                      }),
                      !A &&
                      (0, N.jsxs)(i, {
                        type: `button`,
                        onClick: V,
                        size: `sm`,
                        children: [
                          (0, N.jsx)(_, { className: `mr-2 h-4 w-4` }),
                          ` Add Review`,
                        ],
                      }),
                    ],
                  }),
                  A &&
                  (0, N.jsxs)(E, {
                    className: `border-2 border-primary/20 bg-muted/30`,
                    children: [
                      (0, N.jsx)(T, {
                        children: (0, N.jsx)(C, {
                          className: `text-base font-bold`,
                          children: h === null ? `Add Review` : `Edit Review`,
                        }),
                      }),
                      (0, N.jsxs)(w, {
                        className: `space-y-4`,
                        children: [
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, {
                                htmlFor: `review-name`,
                                children: `Reviewer Name *`,
                              }),
                              (0, N.jsx)(v, {
                                id: `review-name`,
                                value: O.name || ``,
                                onChange: (e) =>
                                  k((t) => ({ ...t, name: e.target.value })),
                                placeholder: `e.g. Vignesh Kumar`,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, {
                                htmlFor: `review-text`,
                                children: `Review Text *`,
                              }),
                              (0, N.jsx)(D, {
                                id: `review-text`,
                                value: O.text || ``,
                                onChange: (e) =>
                                  k((t) => ({ ...t, text: e.target.value })),
                                placeholder: `e.g. Had an amazing trip! Highly recommend Planet Life.`,
                                rows: 3,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `flex gap-2 justify-end pt-2`,
                            children: [
                              (0, N.jsx)(i, {
                                type: `button`,
                                variant: `outline`,
                                onClick: () => j(!1),
                                children: `Cancel`,
                              }),
                              (0, N.jsx)(i, {
                                type: `button`,
                                onClick: W,
                                children:
                                  h === null ? `Add Review` : `Update Review`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid gap-4 mt-2`,
                    children:
                      (n.reviews || []).length === 0
                        ? (0, N.jsx)(`p`, {
                          className: `text-sm text-muted-foreground py-4 text-center`,
                          children: `No reviews added. Default reviews will be shown on the home page.`,
                        })
                        : (n.reviews || []).map((e, t) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex items-start justify-between p-4 border rounded-lg bg-card text-card-foreground shadow-sm`,
                              children: [
                                (0, N.jsxs)(`div`, {
                                  className: `flex items-start gap-4`,
                                  children: [
                                    (0, N.jsx)(`div`, {
                                      className: `w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold uppercase flex-shrink-0`,
                                      children: e.name ? e.name[0] : `U`,
                                    }),
                                    (0, N.jsxs)(`div`, {
                                      children: [
                                        (0, N.jsx)(`h4`, {
                                          className: `font-bold text-sm`,
                                          children: e.name,
                                        }),
                                        (0, N.jsxs)(`p`, {
                                          className: `text-xs text-muted-foreground mt-1 line-clamp-3`,
                                          children: [`"`, e.text, `"`],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)(`div`, {
                                  className: `flex gap-2 ml-4 flex-shrink-0`,
                                  children: [
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `outline`,
                                      size: `sm`,
                                      onClick: () => H(t),
                                      children: [
                                        (0, N.jsx)(d, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Edit`,
                                      ],
                                    }),
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `destructive`,
                                      size: `sm`,
                                      onClick: () => U(t),
                                      children: [
                                        (0, N.jsx)(u, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Delete`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, N.jsx)(`h3`, {
                        className: `text-lg font-semibold`,
                        children: `Trusted By Section`,
                      }),
                      !showCompanyForm &&
                      (0, N.jsxs)(i, {
                        type: `button`,
                        onClick: () => {
                          setCompanyIdx(null);
                          setCompanyForm({ name: ``, logo: `` });
                          setShowCompanyForm(!0);
                        },
                        size: `sm`,
                        children: [
                          (0, N.jsx)(_, { className: `mr-2 h-4 w-4` }),
                          ` Add Trusted Partner`,
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `trustedTitle`,
                        children: `Section Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `trustedTitle`,
                        name: `trustedTitle`,
                        value: n.trustedTitle || ``,
                        onChange: P,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `trustedSubtitle`,
                        children: `Section Subtitle`,
                      }),
                      (0, N.jsx)(D, {
                        id: `trustedSubtitle`,
                        name: `trustedSubtitle`,
                        value: n.trustedSubtitle || ``,
                        onChange: P,
                        rows: 3,
                      }),
                    ],
                  }),
                  showCompanyForm &&
                  (0, N.jsxs)(E, {
                    className: `border-2 border-primary/20 bg-muted/30`,
                    children: [
                      (0, N.jsx)(T, {
                        children: (0, N.jsx)(C, {
                          className: `text-base font-bold`,
                          children: companyIdx === null ? `Add Trusted Partner` : `Edit Trusted Partner`,
                        }),
                      }),
                      (0, N.jsxs)(w, {
                        className: `space-y-4`,
                        children: [
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, {
                                htmlFor: `partner-name`,
                                children: `Organization Name *`,
                              }),
                              (0, N.jsx)(v, {
                                id: `partner-name`,
                                value: companyForm.name || ``,
                                onChange: (e) =>
                                  setCompanyForm((t) => ({ ...t, name: e.target.value })),
                                placeholder: `e.g. ZOHO`,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, { children: `Logo *` }),
                              (0, N.jsx)(F, {
                                onUpload: (e) => setCompanyForm((t) => ({ ...t, logo: e })),
                                defaultImage: companyForm.logo ? y(companyForm.logo) : null,
                                folder: `planet_life/trusted`,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `flex gap-2 justify-end pt-2`,
                            children: [
                              (0, N.jsx)(i, {
                                type: `button`,
                                variant: `outline`,
                                onClick: () => setShowCompanyForm(!1),
                                children: `Cancel`,
                              }),
                              (0, N.jsx)(i, {
                                type: `button`,
                                onClick: (e) => {
                                  e.preventDefault();
                                  if (!companyForm.name || !companyForm.logo) {
                                    alert(`Please fill in both name and upload a logo.`);
                                    return;
                                  }
                                  let list = [...(n.trustedCompanies || [])];
                                  if (companyIdx === null) {
                                    list.push(companyForm);
                                  } else {
                                    list[companyIdx] = companyForm;
                                  }
                                  r((prev) => ({ ...prev, trustedCompanies: list }));
                                  setShowCompanyForm(!1);
                                  setCompanyIdx(null);
                                },
                                children: companyIdx === null ? `Add Partner` : `Update Partner`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid gap-4 mt-2`,
                    children:
                      (n.trustedCompanies || []).length === 0
                        ? (0, N.jsx)(`p`, {
                          className: `text-sm text-muted-foreground py-4 text-center`,
                          children: `No trusted partners customized. Default partners list will be shown.`,
                        })
                        : (n.trustedCompanies || []).map((e, t) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex items-center justify-between p-4 border rounded-lg bg-card text-card-foreground shadow-sm`,
                              children: [
                                (0, N.jsxs)(`div`, {
                                  className: `flex items-center gap-4`,
                                  children: [
                                    (0, N.jsx)(`img`, {
                                      src: y(e.logo),
                                      alt: e.name,
                                      className: `w-12 h-12 object-contain bg-muted p-1 rounded border`,
                                    }),
                                    (0, N.jsx)(`h4`, {
                                      className: `font-bold text-sm`,
                                      children: e.name,
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)(`div`, {
                                  className: `flex gap-2 ml-4 flex-shrink-0`,
                                  children: [
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `outline`,
                                      size: `sm`,
                                      onClick: () => {
                                        setCompanyIdx(t);
                                        setCompanyForm(e);
                                        setShowCompanyForm(!0);
                                      },
                                      children: [
                                        (0, N.jsx)(d, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Edit`,
                                      ],
                                    }),
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `destructive`,
                                      size: `sm`,
                                      onClick: () => {
                                        if (window.confirm(`Are you sure you want to delete this organization?`)) {
                                          let list = (n.trustedCompanies || []).filter((_, idx) => idx !== t);
                                          r((prev) => ({ ...prev, trustedCompanies: list }));
                                        }
                                      },
                                      children: [
                                        (0, N.jsx)(u, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Delete`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                  }),
                ],
              }),
              (0, N.jsx)(i, {
                type: `submit`,
                className: `w-full md:w-auto`,
                children: `Save Changes`,
              }),
            ],
          }),
        }),
      ],
    });
  },
  z = [
    `Globe`,
    `Heart`,
    `Award`,
    `Users`,
    `ShieldCheck`,
    `Sparkles`,
    `Compass`,
    `Map`,
    `Anchor`,
    `Sun`,
    `Camera`,
    `Briefcase`,
    `GraduationCap`,
    `Home`,
  ],
  B = () => {
    let { aboutContent: e, updateAboutContent: t } = a(),
      [n, r] = (0, M.useState)(e),
      { toast: o } = b(),
      s = (e, t, i) => {
        let a = [...(n.stats || [])];
        (a[e] || (a[e] = { id: `stat-${e + 1}`, number: ``, label: `` }),
          (a[e] = { ...a[e], [t]: i }),
          r((e) => ({ ...e, stats: a })));
      },
      c = (e, t, i) => {
        let a = [...(n.coreValues || [])];
        (a[e] ||
          (a[e] = {
            id: `val-${e + 1}`,
            icon: `Globe`,
            title: ``,
            description: ``,
          }),
          (a[e] = { ...a[e], [t]: i }),
          r((e) => ({ ...e, coreValues: a })));
      },
      [l, f] = (0, M.useState)(null),
      [p, m] = (0, M.useState)({
        id: ``,
        title: ``,
        icon: `Briefcase`,
        image: ``,
        desc: ``,
      }),
      [h, g] = (0, M.useState)(!1),
      S = () => {
        (f(null),
          m({ id: ``, title: ``, icon: `Briefcase`, image: ``, desc: `` }),
          g(!0));
      },
      O = (e) => {
        (f(e),
          m(
            n.offeredTrips
              ? n.offeredTrips[e]
              : { id: ``, title: ``, icon: `Briefcase`, image: ``, desc: `` },
          ),
          g(!0));
      },
      k = (e) => {
        if (window.confirm(`Are you sure you want to delete this trip type?`)) {
          let t = [...(n.offeredTrips || [])];
          (t.splice(e, 1), r((e) => ({ ...e, offeredTrips: t })));
        }
      },
      A = (e) => {
        if ((e.preventDefault(), !p.title || !p.image || !p.desc)) {
          alert(`Please fill in title, image, and description.`);
          return;
        }
        let t = [...(n.offeredTrips || [])];
        (l === null
          ? t.push({ ...p, id: `trip-${Date.now()}` })
          : (t[l] = { ...p, id: p.id || `trip-${Date.now()}` }),
          r((e) => ({ ...e, offeredTrips: t })),
          g(!1),
          f(null));
      },
      [j, P] = (0, M.useState)(null),
      [I, L] = (0, M.useState)({ id: ``, src: ``, alt: `` }),
      [R, B] = (0, M.useState)(!1),
      V = () => {
        (P(null), L({ id: ``, src: ``, alt: `` }), B(!0));
      },
      H = (e) => {
        (P(e),
          L(
            n.galleryImages ? n.galleryImages[e] : { id: ``, src: ``, alt: `` },
          ),
          B(!0));
      },
      U = (e) => {
        if (window.confirm(`Are you sure you want to delete this image?`)) {
          let t = [...(n.galleryImages || [])];
          (t.splice(e, 1), r((e) => ({ ...e, galleryImages: t })));
        }
      },
      W = (e) => {
        if ((e.preventDefault(), !I.src || !I.alt)) {
          alert(`Please upload an image and fill in alt text.`);
          return;
        }
        let t = [...(n.galleryImages || [])];
        (j === null
          ? t.push({ ...I, id: `gal-${Date.now()}` })
          : (t[j] = { ...I, id: I.id || `gal-${Date.now()}` }),
          r((e) => ({ ...e, galleryImages: t })),
          B(!1),
          P(null));
      };
    (0, M.useEffect)(() => {
      r(e);
    }, [e]);
    let G = (e) => {
      let { name: t, value: n } = e.target;
      r((e) => ({ ...e, [t]: n }));
    };
    return (0, N.jsxs)(E, {
      children: [
        (0, N.jsx)(T, {
          children: (0, N.jsx)(C, { children: `Edit About Page Content` }),
        }),
        (0, N.jsx)(w, {
          children: (0, N.jsxs)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(),
                t(n),
                o({
                  title: `About Page Updated`,
                  description: `Changes have been saved successfully.`,
                }));
            },
            className: `space-y-6`,
            children: [
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Hero Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroTitle`,
                        children: `Hero Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `heroTitle`,
                        name: `heroTitle`,
                        value: n.heroTitle || ``,
                        onChange: G,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroSubtitle`,
                        children: `Hero Subtitle`,
                      }),
                      (0, N.jsx)(D, {
                        id: `heroSubtitle`,
                        name: `heroSubtitle`,
                        value: n.heroSubtitle || ``,
                        onChange: G,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Our Story`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `ourStoryTitle`,
                        children: `Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `ourStoryTitle`,
                        name: `ourStoryTitle`,
                        value: n.ourStoryTitle || ``,
                        onChange: G,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `ourStoryText`,
                        children: `Story Text`,
                      }),
                      (0, N.jsx)(D, {
                        id: `ourStoryText`,
                        name: `ourStoryText`,
                        value: n.ourStoryText || ``,
                        onChange: G,
                        rows: 6,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, { children: `Story Image` }),
                      (0, N.jsx)(F, {
                        onUpload: (e) => r((t) => ({ ...t, ourStoryImage: e })),
                        defaultImage: n.ourStoryImage
                          ? y(n.ourStoryImage)
                          : null,
                        folder: `planet_life/about`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Stats Section`,
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`,
                    children: [0, 1, 2, 3].map((e) => {
                      let t = n.stats?.[e] || { number: ``, label: `` };
                      return (0, N.jsxs)(
                        `div`,
                        {
                          className: `p-4 border rounded-lg space-y-2 bg-muted/20`,
                          children: [
                            (0, N.jsxs)(x, {
                              className: `font-bold text-xs`,
                              children: [`Stat #`, e + 1],
                            }),
                            (0, N.jsxs)(`div`, {
                              children: [
                                (0, N.jsx)(x, {
                                  htmlFor: `stat-num-${e}`,
                                  className: `text-xs`,
                                  children: `Number`,
                                }),
                                (0, N.jsx)(v, {
                                  id: `stat-num-${e}`,
                                  value: t.number,
                                  onChange: (t) =>
                                    s(e, `number`, t.target.value),
                                  placeholder: `e.g. 20000+`,
                                }),
                              ],
                            }),
                            (0, N.jsxs)(`div`, {
                              children: [
                                (0, N.jsx)(x, {
                                  htmlFor: `stat-label-${e}`,
                                  className: `text-xs`,
                                  children: `Label`,
                                }),
                                (0, N.jsx)(v, {
                                  id: `stat-label-${e}`,
                                  value: t.label,
                                  onChange: (t) =>
                                    s(e, `label`, t.target.value),
                                  placeholder: `e.g. Happy Travelers`,
                                }),
                              ],
                            }),
                          ],
                        },
                        e,
                      );
                    }),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Core Values Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `coreValuesTitle`,
                        children: `Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `coreValuesTitle`,
                        name: `coreValuesTitle`,
                        value: n.coreValuesTitle || ``,
                        onChange: G,
                      }),
                    ],
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-4 mt-2`,
                    children: [0, 1, 2, 3].map((e) => {
                      let t = n.coreValues?.[e] || {
                        icon: `Globe`,
                        title: ``,
                        description: ``,
                      };
                      return (0, N.jsxs)(
                        `div`,
                        {
                          className: `p-4 border rounded-lg space-y-2 bg-muted/20`,
                          children: [
                            (0, N.jsxs)(x, {
                              className: `font-bold text-xs`,
                              children: [`Value #`, e + 1],
                            }),
                            (0, N.jsxs)(`div`, {
                              className: `grid grid-cols-2 gap-2`,
                              children: [
                                (0, N.jsxs)(`div`, {
                                  children: [
                                    (0, N.jsx)(x, {
                                      htmlFor: `val-icon-${e}`,
                                      className: `text-xs`,
                                      children: `Icon`,
                                    }),
                                    (0, N.jsx)(`select`, {
                                      id: `val-icon-${e}`,
                                      value: t.icon,
                                      onChange: (t) =>
                                        c(e, `icon`, t.target.value),
                                      className: `w-full bg-white border border-gray-200 rounded-md p-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20`,
                                      children: z.map((e) =>
                                        (0, N.jsx)(
                                          `option`,
                                          { value: e, children: e },
                                          e,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)(`div`, {
                                  children: [
                                    (0, N.jsx)(x, {
                                      htmlFor: `val-title-${e}`,
                                      className: `text-xs`,
                                      children: `Title`,
                                    }),
                                    (0, N.jsx)(v, {
                                      id: `val-title-${e}`,
                                      value: t.title,
                                      onChange: (t) =>
                                        c(e, `title`, t.target.value),
                                      placeholder: `Title`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, N.jsxs)(`div`, {
                              children: [
                                (0, N.jsx)(x, {
                                  htmlFor: `val-desc-${e}`,
                                  className: `text-xs`,
                                  children: `Description`,
                                }),
                                (0, N.jsx)(D, {
                                  id: `val-desc-${e}`,
                                  value: t.description,
                                  onChange: (t) =>
                                    c(e, `description`, t.target.value),
                                  placeholder: `Description`,
                                  rows: 2,
                                }),
                              ],
                            }),
                          ],
                        },
                        e,
                      );
                    }),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, N.jsx)(`h3`, {
                        className: `text-lg font-semibold`,
                        children: `Services Section`,
                      }),
                      !h &&
                      (0, N.jsxs)(i, {
                        type: `button`,
                        onClick: S,
                        size: `sm`,
                        children: [
                          (0, N.jsx)(_, { className: `mr-2 h-4 w-4` }),
                          ` Add Trip Type`,
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `servicesTitle`,
                        children: `Section Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `servicesTitle`,
                        name: `servicesTitle`,
                        value: n.servicesTitle || ``,
                        onChange: G,
                      }),
                    ],
                  }),
                  h &&
                  (0, N.jsxs)(E, {
                    className: `border-2 border-primary/20 bg-muted/30`,
                    children: [
                      (0, N.jsx)(T, {
                        children: (0, N.jsx)(C, {
                          className: `text-base font-bold`,
                          children:
                            l === null ? `Add Trip Type` : `Edit Trip Type`,
                        }),
                      }),
                      (0, N.jsxs)(w, {
                        className: `space-y-4`,
                        children: [
                          (0, N.jsxs)(`div`, {
                            className: `grid grid-cols-2 gap-4`,
                            children: [
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `trip-title`,
                                    children: `Title *`,
                                  }),
                                  (0, N.jsx)(v, {
                                    id: `trip-title`,
                                    value: p.title || ``,
                                    onChange: (e) =>
                                      m((t) => ({
                                        ...t,
                                        title: e.target.value,
                                      })),
                                    placeholder: `e.g. Corporate Trips`,
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `space-y-2`,
                                children: [
                                  (0, N.jsx)(x, {
                                    htmlFor: `trip-icon`,
                                    children: `Icon *`,
                                  }),
                                  (0, N.jsx)(`select`, {
                                    id: `trip-icon`,
                                    value: p.icon,
                                    onChange: (e) =>
                                      m((t) => ({
                                        ...t,
                                        icon: e.target.value,
                                      })),
                                    className: `w-full bg-white border border-gray-200 rounded-md p-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20`,
                                    children: z.map((e) =>
                                      (0, N.jsx)(
                                        `option`,
                                        { value: e, children: e },
                                        e,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, {
                                htmlFor: `trip-desc`,
                                children: `Description *`,
                              }),
                              (0, N.jsx)(D, {
                                id: `trip-desc`,
                                value: p.desc || ``,
                                onChange: (e) =>
                                  m((t) => ({ ...t, desc: e.target.value })),
                                placeholder: `Description`,
                                rows: 2,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, { children: `Image *` }),
                              (0, N.jsx)(F, {
                                onUpload: (e) =>
                                  m((t) => ({ ...t, image: e })),
                                defaultImage: p.image,
                                folder: `planet_life/about/services`,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `flex gap-2 justify-end pt-2`,
                            children: [
                              (0, N.jsx)(i, {
                                type: `button`,
                                variant: `outline`,
                                onClick: () => g(!1),
                                children: `Cancel`,
                              }),
                              (0, N.jsx)(i, {
                                type: `button`,
                                onClick: A,
                                children:
                                  l === null
                                    ? `Add Trip Type`
                                    : `Update Trip Type`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid gap-4 mt-2`,
                    children:
                      (n.offeredTrips || []).length === 0
                        ? (0, N.jsx)(`p`, {
                          className: `text-sm text-muted-foreground py-4 text-center`,
                          children: `No custom trip types added. Default ones will be shown.`,
                        })
                        : (n.offeredTrips || []).map((e, t) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex items-center justify-between p-4 border rounded-lg bg-card text-card-foreground shadow-sm`,
                              children: [
                                (0, N.jsxs)(`div`, {
                                  className: `flex items-center gap-4`,
                                  children: [
                                    (0, N.jsx)(`img`, {
                                      src: y(e.image),
                                      alt: e.title,
                                      className: `w-16 h-16 object-cover rounded bg-muted`,
                                    }),
                                    (0, N.jsxs)(`div`, {
                                      children: [
                                        (0, N.jsxs)(`h4`, {
                                          className: `font-bold text-sm`,
                                          children: [
                                            e.title,
                                            ` (`,
                                            e.icon,
                                            `)`,
                                          ],
                                        }),
                                        (0, N.jsx)(`p`, {
                                          className: `text-xs text-muted-foreground mt-1 line-clamp-2`,
                                          children: e.desc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, N.jsxs)(`div`, {
                                  className: `flex gap-2 ml-4`,
                                  children: [
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `outline`,
                                      size: `sm`,
                                      onClick: () => O(t),
                                      children: [
                                        (0, N.jsx)(d, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Edit`,
                                      ],
                                    }),
                                    (0, N.jsxs)(i, {
                                      type: `button`,
                                      variant: `destructive`,
                                      size: `sm`,
                                      onClick: () => k(t),
                                      children: [
                                        (0, N.jsx)(u, {
                                          className: `h-4 w-4 mr-1`,
                                        }),
                                        ` Delete`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, N.jsx)(`h3`, {
                        className: `text-lg font-semibold`,
                        children: `Visual Journey (Gallery)`,
                      }),
                      !R &&
                      (0, N.jsxs)(i, {
                        type: `button`,
                        onClick: V,
                        size: `sm`,
                        children: [
                          (0, N.jsx)(_, { className: `mr-2 h-4 w-4` }),
                          ` Add Gallery Image`,
                        ],
                      }),
                    ],
                  }),
                  R &&
                  (0, N.jsxs)(E, {
                    className: `border-2 border-primary/20 bg-muted/30`,
                    children: [
                      (0, N.jsx)(T, {
                        children: (0, N.jsx)(C, {
                          className: `text-base font-bold`,
                          children:
                            j === null
                              ? `Add Gallery Image`
                              : `Edit Gallery Image`,
                        }),
                      }),
                      (0, N.jsxs)(w, {
                        className: `space-y-4`,
                        children: [
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, {
                                htmlFor: `gallery-alt`,
                                children: `Alt Text / Description *`,
                              }),
                              (0, N.jsx)(v, {
                                id: `gallery-alt`,
                                value: I.alt || ``,
                                onChange: (e) =>
                                  L((t) => ({ ...t, alt: e.target.value })),
                                placeholder: `e.g. Bali sunset or happy travelers`,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, N.jsx)(x, { children: `Image *` }),
                              (0, N.jsx)(F, {
                                onUpload: (e) => L((t) => ({ ...t, src: e })),
                                defaultImage: I.src,
                                folder: `planet_life/about/gallery`,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `flex gap-2 justify-end pt-2`,
                            children: [
                              (0, N.jsx)(i, {
                                type: `button`,
                                variant: `outline`,
                                onClick: () => B(!1),
                                children: `Cancel`,
                              }),
                              (0, N.jsx)(i, {
                                type: `button`,
                                onClick: W,
                                children:
                                  j === null ? `Add Image` : `Update Image`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2`,
                    children:
                      (n.galleryImages || []).length === 0
                        ? (0, N.jsx)(`p`, {
                          className: `text-sm text-muted-foreground py-4 col-span-full text-center`,
                          children: `No custom gallery images. Default images will be shown.`,
                        })
                        : (n.galleryImages || []).map((e, t) =>
                          (0, N.jsxs)(
                            `div`,
                            {
                              className: `flex flex-col border rounded-lg bg-card text-card-foreground shadow-sm overflow-hidden`,
                              children: [
                                (0, N.jsx)(`img`, {
                                  src: y(e.src),
                                  alt: e.alt,
                                  className: `w-full h-32 object-cover bg-muted`,
                                }),
                                (0, N.jsxs)(`div`, {
                                  className: `p-3 space-y-2 flex-grow flex flex-col justify-between`,
                                  children: [
                                    (0, N.jsx)(`p`, {
                                      className: `text-xs font-semibold text-foreground truncate`,
                                      children: e.alt,
                                    }),
                                    (0, N.jsxs)(`div`, {
                                      className: `flex gap-2 justify-end`,
                                      children: [
                                        (0, N.jsxs)(i, {
                                          type: `button`,
                                          variant: `outline`,
                                          size: `sm`,
                                          onClick: () => H(t),
                                          children: [
                                            (0, N.jsx)(d, {
                                              className: `h-3.5 w-3.5 mr-1`,
                                            }),
                                            ` Edit`,
                                          ],
                                        }),
                                        (0, N.jsxs)(i, {
                                          type: `button`,
                                          variant: `destructive`,
                                          size: `sm`,
                                          onClick: () => U(t),
                                          children: [
                                            (0, N.jsx)(u, {
                                              className: `h-3.5 w-3.5 mr-1`,
                                            }),
                                            ` Delete`,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4 border-t pt-6`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Mission Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `missionTitle`,
                        children: `Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `missionTitle`,
                        name: `missionTitle`,
                        value: n.missionTitle || ``,
                        onChange: G,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `missionText`,
                        children: `Mission Text`,
                      }),
                      (0, N.jsx)(D, {
                        id: `missionText`,
                        name: `missionText`,
                        value: n.missionText || ``,
                        onChange: G,
                        rows: 4,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)(i, { type: `submit`, children: `Save Changes` }),
            ],
          }),
        }),
      ],
    });
  },
  V = () => {
    let { contactContent: e, updateContactContent: t } = a(),
      [n, r] = (0, M.useState)(e),
      { toast: o } = b();
    (0, M.useEffect)(() => {
      r(e);
    }, [e]);
    let s = (e) => {
      let { name: t, value: n } = e.target;
      r((e) => ({ ...e, [t]: n }));
    };
    return (0, N.jsxs)(E, {
      children: [
        (0, N.jsx)(T, {
          children: (0, N.jsx)(C, { children: `Edit Contact Page Content` }),
        }),
        (0, N.jsx)(w, {
          children: (0, N.jsxs)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(),
                t(n),
                o({
                  title: `Contact Page Updated`,
                  description: `Changes have been saved successfully.`,
                }));
            },
            className: `space-y-6`,
            children: [
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Hero Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroTitle`,
                        children: `Hero Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `heroTitle`,
                        name: `heroTitle`,
                        value: n.heroTitle,
                        onChange: s,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroSubtitle`,
                        children: `Hero Subtitle`,
                      }),
                      (0, N.jsx)(D, {
                        id: `heroSubtitle`,
                        name: `heroSubtitle`,
                        value: n.heroSubtitle,
                        onChange: s,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Contact Info Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `sectionTitle`,
                        children: `Section Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `sectionTitle`,
                        name: `sectionTitle`,
                        value: n.sectionTitle,
                        onChange: s,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `sectionText`,
                        children: `Section Text`,
                      }),
                      (0, N.jsx)(D, {
                        id: `sectionText`,
                        name: `sectionText`,
                        value: n.sectionText,
                        onChange: s,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Contact Details`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `phone`,
                        children: `Phone Number`,
                      }),
                      (0, N.jsx)(v, {
                        id: `phone`,
                        name: `phone`,
                        value: n.phone,
                        onChange: s,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `email`,
                        children: `Email Address`,
                      }),
                      (0, N.jsx)(v, {
                        id: `email`,
                        name: `email`,
                        value: n.email,
                        onChange: s,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `instagram`,
                        children: `Instagram Handle / Link`,
                      }),
                      (0, N.jsx)(v, {
                        id: `instagram`,
                        name: `instagram`,
                        value: n.instagram || ``,
                        onChange: s,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `whatsapp`,
                        children: `WhatsApp Number / Link`,
                      }),
                      (0, N.jsx)(v, {
                        id: `whatsapp`,
                        name: `whatsapp`,
                        value: n.whatsapp || ``,
                        onChange: s,
                        placeholder: `e.g. +91 98765 43210 or https://wa.me/...`,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `facebook`,
                        children: `Facebook Link`,
                      }),
                      (0, N.jsx)(v, {
                        id: `facebook`,
                        name: `facebook`,
                        value: n.facebook || ``,
                        onChange: s,
                        placeholder: `e.g. https://facebook.com/...`,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `twitter`,
                        children: `Twitter Link`,
                      }),
                      (0, N.jsx)(v, {
                        id: `twitter`,
                        name: `twitter`,
                        value: n.twitter || ``,
                        onChange: s,
                        placeholder: `e.g. https://twitter.com/...`,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `youtube`,
                        children: `YouTube Link`,
                      }),
                      (0, N.jsx)(v, {
                        id: `youtube`,
                        name: `youtube`,
                        value: n.youtube || ``,
                        onChange: s,
                        placeholder: `e.g. https://youtube.com/...`,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `address`,
                        children: `Address`,
                      }),
                      (0, N.jsx)(D, {
                        id: `address`,
                        name: `address`,
                        value: n.address || ``,
                        onChange: s,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `mapIframe`,
                        children: `Map Embed Iframe Code`,
                      }),
                      (0, N.jsx)(D, {
                        id: `mapIframe`,
                        name: `mapIframe`,
                        value: n.mapIframe || ``,
                        onChange: s,
                        placeholder: `Paste <iframe ...></iframe> here`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)(i, { type: `submit`, children: `Save Changes` }),
            ],
          }),
        }),
      ],
    });
  },
  H = () => {
    let { packagesContent: e, updatePackagesContent: t } = a(),
      [n, r] = (0, M.useState)(e),
      { toast: o } = b();
    (0, M.useEffect)(() => {
      r(e);
    }, [e]);
    let s = (e) => {
      let { name: t, value: n } = e.target;
      r((e) => ({ ...e, [t]: n }));
    };
    return (0, N.jsxs)(E, {
      children: [
        (0, N.jsx)(T, {
          children: (0, N.jsx)(C, { children: `Edit Packages Page Content` }),
        }),
        (0, N.jsx)(w, {
          children: (0, N.jsxs)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(),
                t(n),
                o({
                  title: `Packages Page Updated`,
                  description: `Changes have been saved successfully.`,
                }));
            },
            className: `space-y-6`,
            children: [
              (0, N.jsxs)(`div`, {
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`h3`, {
                    className: `text-lg font-semibold`,
                    children: `Hero Section`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroTitle`,
                        children: `Hero Title`,
                      }),
                      (0, N.jsx)(v, {
                        id: `heroTitle`,
                        name: `heroTitle`,
                        value: n.heroTitle,
                        onChange: s,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, N.jsx)(x, {
                        htmlFor: `heroSubtitle`,
                        children: `Hero Subtitle`,
                      }),
                      (0, N.jsx)(D, {
                        id: `heroSubtitle`,
                        name: `heroSubtitle`,
                        value: n.heroSubtitle,
                        onChange: s,
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)(i, { type: `submit`, children: `Save Changes` }),
            ],
          }),
        }),
      ],
    });
  },
  U = ({ onEditDestination: e }) => {
    let { destinations: t } = a();
    return (0, N.jsx)(`div`, {
      className: `space-y-6`,
      children: (0, N.jsxs)(E, {
        children: [
          (0, N.jsx)(T, {
            children: (0, N.jsx)(C, {
              children: `All Packages by Destination`,
            }),
          }),
          (0, N.jsx)(w, {
            children: (0, N.jsx)(`div`, {
              className: `grid gap-6`,
              children: t.map((t) =>
                (0, N.jsxs)(
                  `div`,
                  {
                    className: `border rounded-xl p-4 space-y-4`,
                    children: [
                      (0, N.jsxs)(`div`, {
                        className: `flex justify-between items-center border-b pb-2`,
                        children: [
                          (0, N.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, N.jsx)(c, {
                                className: `h-4 w-4 text-red-600`,
                              }),
                              (0, N.jsx)(`h3`, {
                                className: `font-bold text-lg`,
                                children: t.name,
                              }),
                              (0, N.jsxs)(`span`, {
                                className: `text-sm text-muted-foreground`,
                                children: [`(`, t.country, `)`],
                              }),
                            ],
                          }),
                          (0, N.jsxs)(i, {
                            variant: `outline`,
                            size: `sm`,
                            onClick: () => e(t.id),
                            children: [
                              (0, N.jsx)(d, { className: `h-4 w-4 mr-2` }),
                              `Manage Packages`,
                            ],
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`div`, {
                        className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,
                        children: [
                          t.packages.map((e) =>
                            (0, N.jsxs)(
                              `div`,
                              {
                                className: `bg-muted/30 rounded-lg p-3 border border-dashed`,
                                children: [
                                  (0, N.jsxs)(`div`, {
                                    className: `flex justify-between items-start mb-2`,
                                    children: [
                                      (0, N.jsx)(`span`, {
                                        className: `text-sm font-bold`,
                                        children: e.duration,
                                      }),
                                      (0, N.jsxs)(`span`, {
                                        className: `text-xs font-black text-red-600`,
                                        children: [
                                          `₹`,
                                          e.price.toLocaleString(),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, N.jsxs)(`div`, {
                                    className: `flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold`,
                                    children: [
                                      (0, N.jsxs)(`span`, {
                                        className: `flex items-center gap-1`,
                                        children: [
                                          (0, N.jsx)(f, {
                                            className: `h-3 w-3`,
                                          }),
                                          ` `,
                                          e.nights,
                                          `N / `,
                                          e.days,
                                          `D`,
                                        ],
                                      }),
                                      (0, N.jsxs)(`span`, {
                                        className: `flex items-center gap-1`,
                                        children: [
                                          (0, N.jsx)(m, {
                                            className: `h-3 w-3`,
                                          }),
                                          ` `,
                                          e.id,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                          t.packages.length === 0 &&
                          (0, N.jsx)(`p`, {
                            className: `text-sm text-muted-foreground italic`,
                            children: `No packages added yet.`,
                          }),
                        ],
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          }),
        ],
      }),
    });
  },
  W = () => {
    let {
      destinations: e,
      deleteDestination: n,
      addDestination: r,
      updateDestination: o,
      logout: s,
    } = a(),
      [c, l] = (0, M.useState)(!1),
      [f, p] = (0, M.useState)(void 0),
      m = t(),
      h = (e) => {
        (p(e), l(!0));
      },
      v = () => {
        (p(void 0), l(!0));
      },
      b = (e) => {
        window.confirm(`Are you sure you want to delete this destination?`) &&
          n(e);
      };
    return c
      ? (0, N.jsx)(`div`, {
        className: `container mx-auto py-20 px-4`,
        children: (0, N.jsx)(I, {
          initialData: f,
          onSubmit: (e) => {
            (f ? o(e) : r(e), l(!1));
          },
          onCancel: () => l(!1),
        }),
      })
      : (0, N.jsxs)(`div`, {
        className: `container mx-auto py-20 px-4`,
        children: [
          (0, N.jsxs)(`div`, {
            className: `flex justify-between items-center mb-8`,
            children: [
              (0, N.jsx)(`h1`, {
                className: `text-3xl font-bold`,
                children: `Admin Dashboard`,
              }),
              (0, N.jsxs)(i, {
                variant: `destructive`,
                onClick: () => {
                  (s(), m(`/admin/login`));
                },
                children: [
                  (0, N.jsx)(g, { className: `mr-2 h-4 w-4` }),
                  `Logout`,
                ],
              }),
            ],
          }),
          (0, N.jsxs)(j, {
            defaultValue: `home`,
            className: `space-y-6`,
            children: [
              (0, N.jsxs)(A, {
                className: `grid w-full grid-cols-5`,
                children: [
                  (0, N.jsx)(O, { value: `home`, children: `Home` }),
                  (0, N.jsx)(O, {
                    value: `destinations`,
                    children: `Destinations`,
                  }),
                  (0, N.jsx)(O, { value: `packages`, children: `Packages` }),
                  (0, N.jsx)(O, { value: `about`, children: `About` }),
                  (0, N.jsx)(O, { value: `contact`, children: `Contact` }),
                ],
              }),
              (0, N.jsx)(k, { value: `home`, children: (0, N.jsx)(R, {}) }),
              (0, N.jsxs)(k, {
                value: `destinations`,
                className: `space-y-4`,
                children: [
                  (0, N.jsx)(`div`, {
                    className: `flex justify-end`,
                    children: (0, N.jsxs)(i, {
                      onClick: v,
                      children: [
                        (0, N.jsx)(_, { className: `mr-2 h-4 w-4` }),
                        `Add New Destination`,
                      ],
                    }),
                  }),
                  (0, N.jsx)(`div`, {
                    className: `grid gap-4`,
                    children: e.map((e) =>
                      (0, N.jsx)(
                        E,
                        {
                          children: (0, N.jsxs)(w, {
                            className: `flex items-center justify-between p-6`,
                            children: [
                              (0, N.jsxs)(`div`, {
                                className: `flex items-center space-x-4`,
                                children: [
                                  (0, N.jsx)(`img`, {
                                    src: y(e.image),
                                    alt: e.name,
                                    className: `w-16 h-16 object-cover rounded`,
                                  }),
                                  (0, N.jsxs)(`div`, {
                                    children: [
                                      (0, N.jsx)(`h3`, {
                                        className: `font-bold text-lg`,
                                        children: e.name,
                                      }),
                                      (0, N.jsx)(`p`, {
                                        className: `text-sm text-gray-500`,
                                        children: e.country,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `flex space-x-2`,
                                children: [
                                  (0, N.jsx)(i, {
                                    variant: `outline`,
                                    size: `icon`,
                                    onClick: () => h(e),
                                    children: (0, N.jsx)(d, {
                                      className: `h-4 w-4`,
                                    }),
                                  }),
                                  (0, N.jsx)(i, {
                                    variant: `destructive`,
                                    size: `icon`,
                                    onClick: () => b(e.id),
                                    children: (0, N.jsx)(u, {
                                      className: `h-4 w-4`,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
              (0, N.jsxs)(k, {
                value: `packages`,
                className: `space-y-6`,
                children: [
                  (0, N.jsx)(H, {}),
                  (0, N.jsx)(U, {
                    onEditDestination: (t) => {
                      let n = e.find((e) => e.id === t);
                      n && h(n);
                    },
                  }),
                ],
              }),
              (0, N.jsx)(k, { value: `about`, children: (0, N.jsx)(B, {}) }),
              (0, N.jsx)(k, {
                value: `contact`,
                children: (0, N.jsx)(V, {}),
              }),
            ],
          }),
        ],
      });
  };
export { W as default };
