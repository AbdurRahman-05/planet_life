import { a as e } from "./rolldown-runtime.js";
import { n as t, v as n, x as r } from "./vendor-react.js";
import { A as i, k as a } from "./vendor-ui.js";
import { i as o, n as s } from "./AdminContext.js";
import {
  H as c,
  O as l,
  P as u,
  f as d,
  m as f,
  r as p,
  t as m,
  v as h,
} from "./lucide-react.js";
import { f as g } from "./index.js";
import {
  a as _,
  i as v,
  n as y,
  o as b,
  r as x,
  t as S,
} from "./embla-carousel-autoplay.esm.js";
import { t as C } from "./ScrollReveal.js";
import { t as w } from "./storyImages.js";
var T = e(r(), 1),
  E = n(),
  D = (e) =>
    e.startsWith(`http`) || e.startsWith(`/`) ? e : `/img/stories/${e}`,
  O = (0, T.memo)(({ images: e, reverse: t = !1, speed: n = `30s` }) => {
    let r = (t) =>
      e.map((e, n) =>
        (0, E.jsxs)(
          `div`,
          {
            className: `relative w-full aspect-[4/5] rounded-lg mobile:rounded-xl overflow-hidden shadow-md border border-white/10 group flex-shrink-0`,
            children: [
              (0, E.jsx)(`img`, {
                src: D(e),
                alt: `Travel Story`,
                className: `w-full h-full object-cover`,
                loading: `lazy`,
              }),
              (0, E.jsx)(`div`, {
                className: `absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300`,
              }),
            ],
          },
          `${t}-${n}`,
        ),
      );
    return (0, E.jsx)(`div`, {
      className: `flex-1 h-full overflow-hidden relative`,
      children: (0, E.jsxs)(`div`, {
        className: `flex flex-col h-max shrink-0 ${t ? `animate-marquee-vertical-reverse` : `animate-marquee-vertical`}`,
        style: { animationDuration: n },
        children: [
          (0, E.jsx)(`div`, {
            className: `flex flex-col gap-2 mobile:gap-4 pb-2 mobile:pb-4 flex-shrink-0`,
            children: r(`a`),
          }),
          (0, E.jsx)(`div`, {
            className: `flex flex-col gap-2 mobile:gap-4 pb-2 mobile:pb-4 flex-shrink-0`,
            children: r(`b`),
          }),
        ],
      }),
    });
  });
O.displayName = `MarqueeColumn`;
var k = () => {
  let { homeContent: e } = s(),
    t = (0, T.useMemo)(
      () =>
        e?.communityImages && e.communityImages.length > 0
          ? e.communityImages
          : w,
      [e?.communityImages],
    ),
    [n, r, i] = (0, T.useMemo)(() => {
      if (t.length === 0) return [[], [], []];
      let e = [...t];
      for (; e.length < 45;) e = [...e, ...t];
      let n = [],
        r = [],
        i = [];
      return (
        e.forEach((e, t) => {
          t % 3 == 0 ? n.push(e) : t % 3 == 1 ? r.push(e) : i.push(e);
        }),
        [n, r, i]
      );
    }, [t]);
  return (0, E.jsxs)(`div`, {
    className: `h-full w-full overflow-hidden flex gap-2 mobile:gap-4 relative`,
    children: [
      (0, E.jsx)(O, { images: n, speed: `100s` }),
      (0, E.jsx)(O, { images: r, reverse: !0, speed: `90s` }),
      (0, E.jsx)(O, { images: i, speed: `110s` }),
      (0, E.jsx)(`div`, {
        className: `absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none`,
      }),
      (0, E.jsx)(`div`, {
        className: `absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none`,
      }),
    ],
  });
},
  A = (e) => m[e] || u,
  j = () => {
    let { aboutContent: e } = s(),
      [n, r] = (0, T.useState)(null),
      u = e.stats || [],
      m = e.coreValues || [],
      w = (e.galleryImages || []).map((e) => ({ src: g(e.src), alt: e.alt })),
      D = e.offeredTrips || [];
    return (0, E.jsxs)(`div`, {
      className: `min-h-screen bg-white`,
      children: [
        (0, E.jsxs)(`section`, {
          className: `bg-[#0a0a0a] text-white pt-24 mobile:pt-28 md:pt-32 lg:pt-40 pb-12 mobile:pb-16 md:pb-24 lg:pb-32 relative overflow-hidden`,
          children: [
            (0, E.jsx)(`div`, {
              className: `absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.2)_0%,_transparent_60%)]`,
            }),
            (0, E.jsx)(`div`, {
              className: `container mx-auto px-4 text-center relative z-10`,
              children: (0, E.jsxs)(C, {
                width: `100%`,
                children: [
                  (0, E.jsx)(`span`, {
                    className: `text-red-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block drop-shadow-lg`,
                    children: `Our Story`,
                  }),
                  (0, E.jsx)(`h1`, {
                    className: `text-3xl xs:text-4xl mobile:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-4 mobile:mb-6 uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400`,
                    children: e.heroTitle,
                  }),
                  (0, E.jsx)(`p`, {
                    className: `text-xs mobile:text-sm sm:text-base md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed`,
                    children: e.heroSubtitle,
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, E.jsx)(`section`, {
          className: `py-12 mobile:py-16 md:py-24 bg-[#0a0a0a] text-white overflow-hidden`,
          children: (0, E.jsxs)(`div`, {
            className: `container mx-auto px-3 mobile:px-4`,
            children: [
              (0, E.jsxs)(`div`, {
                className: `flex flex-col lg:flex-row items-start gap-8 mobile:gap-12 md:gap-16`,
                children: [
                  (0, E.jsx)(`div`, {
                    className: `lg:w-1/2`,
                    children: (0, E.jsx)(C, {
                      direction: `left`,
                      children: (0, E.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, E.jsx)(`div`, {
                            className: `absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-red-600`,
                          }),
                          (0, E.jsx)(`div`, {
                            className: `absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-red-600`,
                          }),
                          (0, E.jsx)(`img`, {
                            src: g(e.ourStoryImage || `logo.png`),
                            alt: `Planet Life Logo`,
                            className: `rounded-lg shadow-2xl w-full h-[250px] mobile:h-[350px] sm:h-[400px] lg:h-[500px] object-contain relative z-10`,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, E.jsx)(`div`, {
                    className: `lg:w-1/2`,
                    children: (0, E.jsxs)(C, {
                      direction: `right`,
                      children: [
                        (0, E.jsx)(`h2`, {
                          className: `text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold mb-4 mobile:mb-6 md:mb-8 text-white leading-tight uppercase tracking-tight`,
                          children: e.ourStoryTitle,
                        }),
                        (0, E.jsx)(`div`, {
                          className: `w-20 h-1 bg-primary rounded-full mb-8`,
                        }),
                        (0, E.jsxs)(`div`, {
                          className: `relative mb-8`,
                          children: [
                            (0, E.jsx)(h, {
                              className: `absolute -left-10 -top-4 w-12 h-12 text-primary/10 rotate-180`,
                            }),
                            (0, E.jsx)(`p`, {
                              className: `text-lg text-white/80 font-medium leading-relaxed text-justify whitespace-pre-line`,
                              children: e.ourStoryText,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, E.jsx)(C, {
                direction: `up`,
                width: `100%`,
                overflow: `visible`,
                children: (0, E.jsxs)(`div`, {
                  className: `mt-16 w-full`,
                  children: [
                    (0, E.jsx)(`h3`, {
                      className: `text-red-500 font-black tracking-[0.3em] pl-[0.3em] uppercase text-center text-xl md:text-3xl mb-8 block drop-shadow-lg`,
                      children: `Planet Life Achievements`,
                    }),
                    (0, E.jsxs)(`div`, {
                      className: `achievements-container relative w-full overflow-hidden flex gap-6 py-6`,
                      children: [
                        (0, E.jsxs)(`div`, {
                          className: `flex gap-6 shrink-0 animate-marquee`,
                          style: { animationDuration: `25s` },
                          children: [
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `7+ Years`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Experience in this industry`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Crafting journeys with expertise and deep local knowledge.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `6000+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Itineraries Crafted`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Carefully planned itineraries tailored to perfection.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `20k+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Happy Clients`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Trusted by thousands of solo and group travelers.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `80+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Strangers`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `80+ Strangers went to International Trips successfully completed.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `80+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Malaysia Group Travel`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Successfully organized group travel to Malaysia for 80+ members.`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, E.jsxs)(`div`, {
                          className: `flex gap-6 shrink-0 animate-marquee`,
                          style: { animationDuration: `25s` },
                          ariaHidden: `true`,
                          children: [
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `7+ Years`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Experience in this industry`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Crafting journeys with expertise and deep local knowledge.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `6000+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Itineraries Crafted`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Carefully planned itineraries tailored to perfection.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `20k+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Happy Clients`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Trusted by thousands of solo and group travelers.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `80+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Strangers`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `80+ Strangers went to International Trips successfully completed.`,
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `w-[280px] sm:w-[320px] shrink-0 bg-red-950/15 p-6 rounded-2xl border border-red-500/40 shadow-[0_0_20px_2px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_5px_rgba(239,68,68,0.65)] hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-300 text-center flex flex-col items-center justify-center`,
                              children: [
                                (0, E.jsx)(`h1`, {
                                  className: `text-5xl font-heading font-black text-red-500 mb-2 tracking-tighter`,
                                  children: `80+`,
                                }),
                                (0, E.jsx)(`h2`, {
                                  className: `text-xs font-black tracking-widest text-white uppercase`,
                                  children: `Malaysia Group Travel`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-sm text-white/80 mt-2 font-medium`,
                                  children: `Successfully organized group travel to Malaysia for 80+ members.`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, E.jsx)(`div`, {
                          className: `absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none`,
                        }),
                        (0, E.jsx)(`div`, {
                          className: `absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none`,
                        }),
                      ],
                    })
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, E.jsxs)(`section`, {
          className: `py-20 mobile:py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden`,
          children: [
            (0, E.jsxs)(`div`, {
              className: `absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-30 pointer-events-none overflow-hidden`,
              children: [
                (0, E.jsx)(`div`, {
                  className: `absolute inset-0 bg-gradient-to-l from-[#0a0a0a] via-transparent to-[#0a0a0a] z-20`,
                }),
                (0, E.jsx)(`div`, {
                  className: `h-full w-full transform scale-110`,
                  children: (0, E.jsx)(k, {}),
                }),
              ],
            }),
            (0, E.jsx)(`div`, {
              className: `container mx-auto px-4 relative z-20`,
              children: (0, E.jsxs)(`div`, {
                className: `flex flex-col lg:flex-row items-center gap-12 lg:gap-16`,
                children: [
                  (0, E.jsx)(`div`, {
                    className: `w-full lg:w-3/5`,
                    children: (0, E.jsxs)(C, {
                      direction: `left`,
                      children: [
                        (0, E.jsx)(`span`, {
                          className: `text-red-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block`,
                          children: `Our Signature Experience`,
                        }),
                        (0, E.jsxs)(`h2`, {
                          className: `text-4xl mobile:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-8 uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400`,
                          children: [
                            `Strangers Trips: `,
                            (0, E.jsx)(`br`, {}),
                            (0, E.jsx)(`span`, {
                              className: `text-red-600`,
                              children: `The New Way`,
                            }),
                            ` `,
                            (0, E.jsx)(`br`, {}),
                            `To Explore`,
                          ],
                        }),
                        (0, E.jsxs)(`div`, {
                          className: `flex items-center gap-4 mobile:gap-6 mb-10 mobile:mb-12`,
                          children: [
                            (0, E.jsx)(`div`, {
                              className: `text-6xl mobile:text-7xl md:text-8xl font-heading font-black text-red-600 select-none`,
                              children: `15+`,
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `bg-red-600/20 border border-red-600/30 p-3 mobile:p-4 rounded-xl mobile:rounded-2xl backdrop-blur-md`,
                              children: [
                                (0, E.jsx)(`p`, {
                                  className: `text-lg mobile:text-xl font-bold text-red-500`,
                                  children: `Successfully Conducted`,
                                }),
                                (0, E.jsx)(`p`, {
                                  className: `text-white/60 text-xs mobile:text-sm`,
                                  children: `International Strangers Trips`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, E.jsx)(`p`, {
                          className: `text-base mobile:text-lg text-white/70 leading-relaxed mb-8 mobile:mb-10 max-w-xl font-medium`,
                          children: `Planet Life's Strangers Trips are designed for the bold, the solo, and the curious. We bring together a group of like-minded travelers who start as strangers and return as a lifelong family.`,
                        }),
                        (0, E.jsxs)(`div`, {
                          className: `grid grid-cols-1 md:grid-cols-2 gap-6 mobile:gap-8`,
                          children: [
                            (0, E.jsxs)(`div`, {
                              className: `flex gap-4`,
                              children: [
                                (0, E.jsx)(`div`, {
                                  className: `w-10 h-10 mobile:w-12 mobile:h-12 rounded-xl bg-red-600 flex-shrink-0 flex items-center justify-center`,
                                  children: (0, E.jsx)(f, {
                                    className: `w-5 h-5 mobile:w-6 mobile:h-6 text-white`,
                                  }),
                                }),
                                (0, E.jsxs)(`div`, {
                                  children: [
                                    (0, E.jsx)(`h4`, {
                                      className: `font-bold text-base mobile:text-lg mb-1 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400`,
                                      children: `Safe & Secured`,
                                    }),
                                    (0, E.jsx)(`p`, {
                                      className: `text-xs mobile:text-sm text-white/50`,
                                      children: `Meticulously planned with 24/7 on-ground assistance.`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, E.jsxs)(`div`, {
                              className: `flex gap-4`,
                              children: [
                                (0, E.jsx)(`div`, {
                                  className: `w-10 h-10 mobile:w-12 mobile:h-12 rounded-xl bg-white/10 flex-shrink-0 flex items-center justify-center`,
                                  children: (0, E.jsx)(d, {
                                    className: `w-5 h-5 mobile:w-6 mobile:h-6 text-red-600`,
                                  }),
                                }),
                                (0, E.jsxs)(`div`, {
                                  children: [
                                    (0, E.jsx)(`h4`, {
                                      className: `font-bold text-base mobile:text-lg mb-1 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400`,
                                      children: `Curated Moments`,
                                    }),
                                    (0, E.jsx)(`p`, {
                                      className: `text-xs mobile:text-sm text-white/50`,
                                      children: `Exclusive activities designed for deep group bonding.`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, E.jsx)(`div`, {
                    className: `w-full lg:w-2/5 flex flex-col justify-center`,
                    children: (0, E.jsx)(C, {
                      direction: `right`,
                      delay: 0.2,
                      children: (0, E.jsxs)(`div`, {
                        className: `relative group p-6 mobile:p-8 rounded-[2rem] mobile:rounded-[3.5rem] bg-red-600/5 backdrop-blur-sm border border-white/5 overflow-hidden`,
                        children: [
                          (0, E.jsx)(`div`, {
                            className: `absolute -inset-4 bg-red-600/10 rounded-[2.5rem] mobile:rounded-[3rem] blur-2xl group-hover:bg-red-600/20 transition-all duration-500`,
                          }),
                          (0, E.jsxs)(`div`, {
                            className: `relative z-10`,
                            children: [
                              (0, E.jsx)(`h4`, {
                                className: `text-2xl mobile:text-3xl font-black uppercase tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400`,
                                children: `Next Adventure`,
                              }),
                              (0, E.jsx)(`p`, {
                                className: `text-white/60 text-xs mobile:text-sm mb-6 uppercase tracking-[0.2em] font-bold leading-relaxed`,
                                children: `Join our next signature group of strangers turned family`,
                              }),
                              (0, E.jsx)(o, {
                                asChild: !0,
                                className: `bg-red-600 hover:bg-white hover:text-red-600 text-white rounded-full w-full sm:w-fit px-8 py-6 font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:scale-105`,
                                children: (0, E.jsxs)(t, {
                                  to: `/#strangers`,
                                  children: [
                                    `Explore Schedule `,
                                    (0, E.jsx)(c, {
                                      className: `ml-2 w-5 h-5`,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, E.jsx)(`section`, {
          className: `py-12 mobile:py-16 md:py-24 bg-gray-50 border-y border-gray-100`,
          children: (0, E.jsxs)(`div`, {
            className: `container mx-auto px-3 mobile:px-4`,
            children: [
              (0, E.jsx)(C, {
                width: `100%`,
                children: (0, E.jsxs)(`div`, {
                  className: `text-center mb-16`,
                  children: [
                    (0, E.jsx)(`span`, {
                      className: `text-primary font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase mb-3 mobile:mb-4 block text-[10px] mobile:text-xs`,
                      children: `Our Philosophy`,
                    }),
                    (0, E.jsx)(`h2`, {
                      className: `text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold text-foreground uppercase tracking-tight`,
                      children: e.coreValuesTitle || `Why Travelers Choose Us`,
                    }),
                  ],
                }),
              }),
              (0, E.jsx)(`div`, {
                className: `grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-4 gap-4 mobile:gap-6 md:gap-8`,
                children: m.map((e, t) => {
                  let n = A(e.icon);
                  return (0, E.jsx)(
                    C,
                    {
                      delay: t * 0.1,
                      children: (0, E.jsxs)(`div`, {
                        className: `group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 h-full flex flex-col`,
                        children: [
                          (0, E.jsx)(`div`, {
                            className: `w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-500`,
                            children: (0, E.jsx)(n, {
                              className: `w-8 h-8 text-red-600 group-hover:text-black`,
                            }),
                          }),
                          (0, E.jsx)(`h3`, {
                            className: `text-xl font-extrabold mb-4 text-black group-hover:text-red-600 transition-colors duration-500 uppercase`,
                            children: e.title,
                          }),
                          (0, E.jsx)(`p`, {
                            className: `text-gray-600 leading-relaxed text-balance`,
                            children: e.description,
                          }),
                        ],
                      }),
                    },
                    e.id || t,
                  );
                }),
              }),
            ],
          }),
        }),
        (0, E.jsx)(`section`, {
          className: `py-12 mobile:py-16 md:py-24 bg-white overflow-hidden`,
          children: (0, E.jsxs)(`div`, {
            className: `container mx-auto px-3 mobile:px-4`,
            children: [
              (0, E.jsx)(C, {
                width: `100%`,
                children: (0, E.jsxs)(`div`, {
                  className: `text-center mb-16`,
                  children: [
                    (0, E.jsx)(`span`, {
                      className: `text-red-600 font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase mb-3 mobile:mb-4 block text-[10px] mobile:text-xs`,
                      children: `Our Services`,
                    }),
                    (0, E.jsx)(`h2`, {
                      className: `text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-heading font-bold text-black uppercase tracking-tight`,
                      children: e.servicesTitle || `Trips We Offer`,
                    }),
                  ],
                }),
              }),
              (0, E.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mobile:gap-8`,
                children: D.map((e, t) => {
                  let n = A(e.icon);
                  return (0, E.jsx)(
                    C,
                    {
                      delay: t * 0.1,
                      width: `100%`,
                      children: (0, E.jsxs)(`div`, {
                        className: `group bg-white rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2`,
                        children: [
                          (0, E.jsxs)(`div`, {
                            className: `relative h-48 mobile:h-56 overflow-hidden`,
                            children: [
                              (0, E.jsx)(`img`, {
                                src: g(e.image),
                                alt: e.title,
                                className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`,
                              }),
                              (0, E.jsx)(`div`, {
                                className: `absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity`,
                              }),
                            ],
                          }),
                          (0, E.jsxs)(`div`, {
                            className: `p-6 mobile:p-8 flex flex-col flex-grow relative`,
                            children: [
                              (0, E.jsx)(`div`, {
                                className: `absolute -top-8 right-6 bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 group-hover:rotate-12 transition-transform duration-500`,
                                children: (0, E.jsx)(n, {
                                  className: `w-8 h-8 text-white`,
                                }),
                              }),
                              (0, E.jsx)(`h3`, {
                                className: `text-xl mobile:text-2xl font-heading font-black uppercase text-black mb-3 pr-16`,
                                children: e.title,
                              }),
                              (0, E.jsx)(`p`, {
                                className: `text-sm text-gray-600 leading-relaxed font-medium`,
                                children: e.desc,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.id || t,
                  );
                }),
              }),
            ],
          }),
        }),
        (0, E.jsxs)(`section`, {
          className: `py-10 mobile:py-14 md:py-20 bg-red-600 relative overflow-hidden`,
          children: [
            (0, E.jsxs)(`div`, {
              className: `absolute inset-0 opacity-10`,
              children: [
                (0, E.jsx)(`div`, {
                  className: `absolute top-0 right-0 w-[500px] h-[500px] bg-black rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2`,
                }),
                (0, E.jsx)(`div`, {
                  className: `absolute bottom-0 left-0 w-[500px] h-[500px] bg-black rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2`,
                }),
              ],
            }),
            (0, E.jsx)(`div`, {
              className: `container mx-auto px-4 relative z-10`,
              children: (0, E.jsx)(`div`, {
                className: `grid grid-cols-2 md:grid-cols-4 gap-6 mobile:gap-8 md:gap-12 text-center`,
                children: u.map((e, t) =>
                  (0, E.jsx)(
                    C,
                    {
                      delay: t * 0.1,
                      children: (0, E.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, E.jsx)(`div`, {
                            className: `text-2xl mobile:text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-black`,
                            children: e.number,
                          }),
                          (0, E.jsx)(`div`, {
                            className: `text-black/80 uppercase tracking-widest text-xs font-extrabold`,
                            children: e.label,
                          }),
                        ],
                      }),
                    },
                    t,
                  ),
                ),
              }),
            }),
          ],
        }),
        (0, E.jsx)(`section`, {
          className: `py-12 mobile:py-16 md:py-24 bg-white`,
          children: (0, E.jsxs)(`div`, {
            className: `container mx-auto px-3 mobile:px-4`,
            children: [
              (0, E.jsx)(C, {
                width: `100%`,
                children: (0, E.jsxs)(`div`, {
                  className: `text-center mb-16`,
                  children: [
                    (0, E.jsx)(`span`, {
                      className: `text-red-600 font-extrabold tracking-[0.15em] mobile:tracking-[0.2em] uppercase mb-3 mobile:mb-4 block text-[10px] mobile:text-xs`,
                      children: `Visual Journey`,
                    }),
                    (0, E.jsx)(`h2`, {
                      className: `text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-sans font-extrabold text-black uppercase`,
                      children: `Our World Through Your Eyes`,
                    }),
                  ],
                }),
              }),
              (0, E.jsx)(`div`, {
                className: `relative px-2 mobile:px-4 sm:px-8 md:px-12`,
                children: (0, E.jsx)(C, {
                  delay: 0.2,
                  children: (0, E.jsxs)(y, {
                    opts: { align: `start`, loop: !0 },
                    plugins: [S({ delay: 3e3 })],
                    className: `w-full`,
                    children: [
                      (0, E.jsx)(x, {
                        className: `-ml-4`,
                        children: w.map((e, t) =>
                          (0, E.jsx)(
                            v,
                            {
                              className: `pl-4 basis-full mobile:basis-1/2 lg:basis-1/3`,
                              children: (0, E.jsx)(`div`, {
                                className: `p-1`,
                                children: (0, E.jsxs)(`div`, {
                                  className: `group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]`,
                                  onClick: () => r(e),
                                  children: [
                                    (0, E.jsx)(`img`, {
                                      src: e.src,
                                      alt: e.alt,
                                      className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`,
                                    }),
                                    (0, E.jsx)(`div`, {
                                      className: `absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`,
                                      children: (0, E.jsx)(`p`, {
                                        className: `text-white text-lg font-medium`,
                                        children: e.alt,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, E.jsxs)(`div`, {
                        className: `flex justify-center mt-8 gap-4`,
                        children: [
                          (0, E.jsx)(b, {
                            className: `relative translate-x-0 translate-y-0 h-12 w-12 border-red-600 text-red-600 hover:bg-red-600 hover:text-black`,
                          }),
                          (0, E.jsx)(_, {
                            className: `relative translate-x-0 translate-y-0 h-12 w-12 border-red-600 text-red-600 hover:bg-red-600 hover:text-black`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
        (0, E.jsx)(`section`, {
          className: `py-12 mobile:py-16 md:py-24 bg-gray-50`,
          children: (0, E.jsx)(`div`, {
            className: `container mx-auto px-3 mobile:px-4`,
            children: (0, E.jsx)(C, {
              width: `100%`,
              children: (0, E.jsxs)(`div`, {
                className: `max-w-4xl mx-auto text-center`,
                children: [
                  (0, E.jsx)(`div`, {
                    className: `inline-block p-4 rounded-full bg-red-600/10 mb-8`,
                    children: (0, E.jsx)(l, {
                      className: `w-8 h-8 text-black`,
                    }),
                  }),
                  (0, E.jsx)(`h2`, {
                    className: `text-2xl xs:text-3xl mobile:text-4xl md:text-5xl font-sans font-extrabold mb-4 mobile:mb-6 md:mb-8 text-black uppercase`,
                    children: e.missionTitle,
                  }),
                  (0, E.jsxs)(`p`, {
                    className: `text-base mobile:text-lg sm:text-xl md:text-2xl text-black font-extrabold leading-relaxed italic font-sans`,
                    children: [`"`, e.missionText, `"`],
                  }),
                  (0, E.jsx)(`div`, {
                    className: `mt-12 flex justify-center`,
                    children: (0, E.jsx)(`div`, {
                      className: `w-24 h-1 bg-red-600 rounded-full`,
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
        (0, E.jsx)(i, {
          children:
            n &&
            (0, E.jsx)(a.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => r(null),
              className: `fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md`,
              children: (0, E.jsxs)(a.div, {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className: `relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, E.jsx)(`button`, {
                    onClick: () => r(null),
                    className: `absolute text-white hover:text-red-500 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2.5 right-4 top-4 mobile:right-6 mobile:top-6 transition-all duration-300 focus:outline-none focus:ring-0 z-10`,
                    children: (0, E.jsx)(p, { className: `w-5 h-5` }),
                  }),
                  (0, E.jsx)(`img`, {
                    src: n.src,
                    alt: n.alt,
                    className: `max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl`,
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  };
export { j as default };
