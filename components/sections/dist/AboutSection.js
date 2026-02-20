'use client';
"use strict";
exports.__esModule = true;
exports.AboutSection = void 0;
var react_1 = require("react");
var image_1 = require("next/image");
var useLangStore_1 = require("@/store/useLangStore");
var translations_1 = require("@/lib/translations");
function AboutSection() {
    var lang = useLangStore_1.useLangStore().lang;
    var t = translations_1.T[lang].about;
    var sectionRef = react_1.useRef(null);
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    react_1.useEffect(function () {
        var obs = new IntersectionObserver(function (_a) {
            var e = _a[0];
            if (e.isIntersecting)
                setVisible(true);
        }, { threshold: 0.3 });
        if (sectionRef.current)
            obs.observe(sectionRef.current);
        return function () { return obs.disconnect(); };
    }, []);
    var renderP = function (text) {
        return React.createElement("p", { dangerouslySetInnerHTML: { __html: text
                    .replace(/<b>/g, '<strong style="color:#e8e8f0">')
                    .replace(/<\/b>/g, '</strong>')
                    .replace(/<teal>/g, '<strong style="color:#00ffcc">')
                    .replace(/<\/teal>/g, '</strong>')
            } });
    };
    return (React.createElement("section", { id: "about", ref: sectionRef, className: "min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28", style: { background: '#0a0a0a' } },
        React.createElement("div", { className: "max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" },
            React.createElement("div", { className: "relative transition-all duration-1000 " + (visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10') },
                React.createElement("div", { className: "relative w-64 h-64 sm:w-80 sm:h-80 mx-auto" },
                    React.createElement("div", { className: "absolute inset-0 rounded-full", style: { background: 'radial-gradient(circle, rgba(0,255,204,0.08), transparent 70%)', filter: 'blur(30px)' } }),
                    React.createElement("div", { className: "relative w-full h-full rounded-full overflow-hidden", style: { border: '1px solid rgba(0,255,204,0.15)' } },
                        React.createElement(image_1["default"], { src: "/profile.png", alt: "Clickman Andriamanantsoa", fill: true, style: { objectFit: 'cover', objectPosition: 'center center' }, className: "transition-transform duration-500 hover:scale-105" })))),
            React.createElement("div", { className: "text-center lg:text-left transition-all duration-1000 delay-300 " + (visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10') },
                React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '1rem' } }, t.label),
                React.createElement("h2", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 300, lineHeight: 1.25, marginBottom: '1.25rem' } },
                    t.h2a,
                    React.createElement("em", { className: "block mt-1", style: { color: '#9b5de5' } }, t.h2b)),
                React.createElement("div", { style: { color: '#7a7a9a', fontFamily: 'DM Sans,sans-serif', fontSize: '0.8rem', lineHeight: 1.75 }, className: "space-y-3" },
                    renderP(t.p1),
                    renderP(t.p2),
                    renderP(t.p3)),
                React.createElement("div", { className: "grid grid-cols-3 gap-4 mt-8 pt-8", style: { borderTop: '1px solid rgba(255,255,255,0.05)' } }, t.stats.map(function (s) { return (React.createElement("div", { key: s.label, className: "flex flex-col items-center lg:items-start" },
                    React.createElement("p", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#00ffcc', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300 } }, s.number),
                    React.createElement("p", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' } }, s.label))); }))))));
}
exports.AboutSection = AboutSection;
exports["default"] = AboutSection;
