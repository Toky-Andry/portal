'use client';
"use strict";
exports.__esModule = true;
exports.ExperienceSection = void 0;
var react_1 = require("react");
var useLangStore_1 = require("@/store/useLangStore");
var translations_1 = require("@/lib/translations");
function ExperienceSection() {
    var lang = useLangStore_1.useLangStore().lang;
    var t = translations_1.T[lang].experience;
    var sectionRef = react_1.useRef(null);
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(0), activeIndex = _b[0], setActiveIndex = _b[1];
    react_1.useEffect(function () {
        var obs = new IntersectionObserver(function (_a) {
            var e = _a[0];
            if (e.isIntersecting)
                setVisible(true);
        }, { threshold: 0.2 });
        if (sectionRef.current)
            obs.observe(sectionRef.current);
        return function () { return obs.disconnect(); };
    }, []);
    return (React.createElement("section", { id: "experience", ref: sectionRef, className: "min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28", style: { background: '#0d0d0d' } },
        React.createElement("div", { className: "max-w-5xl mx-auto w-full" },
            React.createElement("div", { className: "mb-14 text-center sm:text-left transition-all duration-1000 " + (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') },
                React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '0.75rem' } }, t.label),
                React.createElement("h2", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 300 } }, t.h2)),
            React.createElement("div", { className: "relative" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-px", style: { background: 'linear-gradient(to bottom,#00ffcc,#9b5de5,#ffd93d)', opacity: 0.25 } }),
                React.createElement("div", { className: "space-y-2" }, t.jobs.map(function (exp, i) { return (React.createElement("div", { key: i, className: "relative pl-10 py-6 cursor-pointer transition-all duration-500 " + (visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'), style: { transitionDelay: i * 180 + "ms" }, onClick: function () { return setActiveIndex(i === activeIndex ? -1 : i); }, "data-cursor": "true" },
                    React.createElement("div", { className: "absolute left-0 top-9 w-2.5 h-2.5 rounded-full", style: {
                            background: exp.color,
                            transform: "translateX(-50%) scale(" + (activeIndex === i ? 1.4 : 1) + ")",
                            boxShadow: activeIndex === i ? "0 0 14px " + exp.color : 'none',
                            transition: 'all 0.3s'
                        } }),
                    React.createElement("div", { className: "glass rounded-none p-5 sm:p-6", style: {
                            borderLeft: "2px solid " + (activeIndex === i ? exp.color : 'transparent'),
                            border: activeIndex === i ? "1px solid " + exp.color + "25" : '1px solid rgba(255,255,255,0.03)'
                        } },
                        React.createElement("div", { className: "flex flex-wrap items-start justify-between gap-3 mb-3" },
                            React.createElement("div", null,
                                React.createElement("h3", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1rem,2vw,1.3rem)', fontWeight: 300 } }, exp.role),
                                React.createElement("p", { style: { color: exp.color, fontFamily: 'Space Mono,monospace', fontSize: '10px', marginTop: '3px' } },
                                    exp.company,
                                    " \u00B7 ",
                                    exp.location)),
                            React.createElement("p", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '9px' } }, exp.period)),
                        React.createElement("div", { className: "overflow-hidden transition-all duration-500", style: { maxHeight: activeIndex === i ? '200px' : '0' } },
                            React.createElement("p", { style: { color: '#7a7a9a', fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', lineHeight: 1.7, marginBottom: '1rem', paddingTop: '0.5rem' } }, exp.description),
                            React.createElement("div", { className: "flex flex-wrap gap-2" }, exp.tags.map(function (tag) { return (React.createElement("span", { key: tag, style: { border: "1px solid " + exp.color + "35", color: exp.color, fontFamily: 'Space Mono,monospace', fontSize: '9px', padding: '3px 10px' } }, tag)); }))),
                        React.createElement("div", { className: "mt-3 flex items-center gap-2", style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '9px' } },
                            React.createElement("span", null, activeIndex === i ? t.collapse : t.expand),
                            React.createElement("span", { style: { transform: activeIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', display: 'inline-block' } }, "\u2193"))))); }))))));
}
exports.ExperienceSection = ExperienceSection;
exports["default"] = ExperienceSection;
