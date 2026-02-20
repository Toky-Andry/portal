'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useLangStore_1 = require("@/store/useLangStore");
var translations_1 = require("@/lib/translations");
var NAV_IDS = ['about', 'experience', 'projects', 'skills', 'contact'];
var FlagFR = function () { return (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { display: 'block', borderRadius: 2, overflow: 'hidden' } },
    React.createElement("rect", { width: "7", height: "14", fill: "#002395" }),
    React.createElement("rect", { x: "7", width: "6", height: "14", fill: "#fff" }),
    React.createElement("rect", { x: "13", width: "7", height: "14", fill: "#ED2939" }))); };
var FlagGB = function () { return (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 60 40", style: { display: 'block', borderRadius: 2, overflow: 'hidden' } },
    React.createElement("rect", { width: "60", height: "40", fill: "#012169" }),
    React.createElement("path", { d: "M0,0 L60,40 M60,0 L0,40", stroke: "#fff", strokeWidth: "8" }),
    React.createElement("path", { d: "M0,0 L60,40 M60,0 L0,40", stroke: "#C8102E", strokeWidth: "5" }),
    React.createElement("path", { d: "M30,0 V40 M0,20 H60", stroke: "#fff", strokeWidth: "12" }),
    React.createElement("path", { d: "M30,0 V40 M0,20 H60", stroke: "#C8102E", strokeWidth: "7" }))); };
function Navbar() {
    var _a = useLangStore_1.useLangStore(), lang = _a.lang, toggle = _a.toggle;
    var t = translations_1.T[lang];
    var _b = react_1.useState(false), scrolled = _b[0], setScrolled = _b[1];
    var _c = react_1.useState(''), activeSection = _c[0], setActiveSection = _c[1];
    var _d = react_1.useState(false), menuOpen = _d[0], setMenuOpen = _d[1];
    // ── CV dynamique selon la langue ──
    var cvFile = lang === 'fr'
        ? '/CV/FR.pdf'
        : '/CV/ENG.pdf';
    var cvLabel = lang === 'fr' ? 'CV FR' : 'CV EN';
    react_1.useEffect(function () {
        var onScroll = function () {
            setScrolled(window.scrollY > 50);
            var found = NAV_IDS.find(function (id) {
                var el = document.getElementById(id);
                if (!el)
                    return false;
                var r = el.getBoundingClientRect();
                return r.top <= 100 && r.bottom >= 100;
            });
            if (found)
                setActiveSection(found);
        };
        window.addEventListener('scroll', onScroll);
        return function () { return window.removeEventListener('scroll', onScroll); };
    }, []);
    var scrollTo = function (id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };
    var CurrentFlag = lang === 'fr' ? FlagFR : FlagGB;
    var NextFlag = lang === 'fr' ? FlagGB : FlagFR;
    var nextLabel = lang === 'fr' ? 'EN' : 'FR';
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500", style: {
                padding: scrolled ? '10px 0' : '18px 0',
                background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.55)',
                backdropFilter: 'blur(20px)',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
            } },
            React.createElement("div", { className: "w-full px-5 md:px-10 flex items-center justify-between" },
                React.createElement("button", { onClick: function () { return window.scrollTo({ top: 0, behavior: 'smooth' }); }, style: {
                        color: '#00ffcc', fontFamily: 'Cormorant Garamond, serif',
                        letterSpacing: '0.3em', fontSize: '0.88rem', fontWeight: 300, flexShrink: 0
                    } }, "Toky"),
                React.createElement("div", { className: "hidden md:flex items-center gap-6", style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)' } }, t.nav.map(function (label, i) {
                    var id = NAV_IDS[i];
                    var active = activeSection === id;
                    return (React.createElement("button", { key: id, onClick: function () { return scrollTo(id); }, style: {
                            fontFamily: 'Space Mono, monospace', fontSize: '10px',
                            letterSpacing: '0.14em', textTransform: 'uppercase',
                            color: active ? '#00ffcc' : '#5a5a7a',
                            transition: 'color 0.3s', position: 'relative'
                        }, onMouseEnter: function (e) { if (!active)
                            e.target.style.color = '#c8c8e0'; }, onMouseLeave: function (e) { if (!active)
                            e.target.style.color = '#5a5a7a'; } },
                        label,
                        active && (React.createElement("span", { style: { position: 'absolute', bottom: -3, left: 0, width: '100%', height: 1, background: '#00ffcc' } }))));
                })),
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("button", { onClick: toggle, "data-cursor": "true", title: lang === 'fr' ? 'Switch to English' : 'Passer en français', className: "group flex items-center gap-2 transition-all duration-300", style: {
                            border: '1px solid rgba(0,255,204,0.15)',
                            padding: '5px 10px',
                            background: 'rgba(0,255,204,0.03)',
                            borderRadius: 2
                        }, onMouseEnter: function (e) { return (e.currentTarget.style.borderColor = 'rgba(0,255,204,0.35)'); }, onMouseLeave: function (e) { return (e.currentTarget.style.borderColor = 'rgba(0,255,204,0.15)'); } },
                        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 5 } },
                            React.createElement(CurrentFlag, null),
                            React.createElement("span", { style: { fontFamily: 'Space Mono,monospace', fontSize: '9px', color: '#00ffcc', letterSpacing: '0.1em' } }, lang.toUpperCase())),
                        React.createElement("span", { style: { color: 'rgba(255,255,255,0.12)', fontSize: '10px' } }, "|"),
                        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 5, opacity: 0.35, transition: 'opacity 0.3s' }, className: "group-hover:!opacity-75" },
                            React.createElement(NextFlag, null),
                            React.createElement("span", { style: { fontFamily: 'Space Mono,monospace', fontSize: '9px', color: '#5a5a7a', letterSpacing: '0.1em' } }, nextLabel))),
                    React.createElement("a", { href: cvFile, download: true, className: "hidden md:flex items-center gap-1", style: {
                            fontFamily: 'Space Mono, monospace', fontSize: '10px',
                            letterSpacing: '0.14em', textTransform: 'uppercase',
                            color: '#00ffcc', border: '1px solid rgba(0,255,204,0.22)',
                            padding: '6px 13px', transition: 'background 0.3s'
                        }, onMouseEnter: function (e) { return (e.currentTarget.style.background = 'rgba(0,255,204,0.07)'); }, onMouseLeave: function (e) { return (e.currentTarget.style.background = 'transparent'); } },
                        cvLabel,
                        " \u2192"),
                    React.createElement("button", { className: "flex md:hidden flex-col gap-1.5 w-8 h-8 justify-center items-end", onClick: function () { return setMenuOpen(!menuOpen); }, "aria-label": "Menu" },
                        React.createElement("span", { style: { display: 'block', width: 22, height: 1, background: '#00ffcc', transition: 'all 0.3s', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' } }),
                        React.createElement("span", { style: { display: 'block', width: 14, height: 1, background: '#00ffcc', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 } }),
                        React.createElement("span", { style: { display: 'block', width: 22, height: 1, background: '#00ffcc', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' } }))))),
        React.createElement("div", { className: "fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500", style: {
                background: 'rgba(8,8,12,0.98)', backdropFilter: 'blur(20px)',
                opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none'
            } },
            t.nav.map(function (label, i) { return (React.createElement("button", { key: NAV_IDS[i], onClick: function () { return scrollTo(NAV_IDS[i]); }, style: {
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.4rem, 6vw, 2.2rem)',
                    color: '#e8e8f0', letterSpacing: '0.08em',
                    transition: "all 0.4s " + i * 60 + "ms",
                    transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                    opacity: menuOpen ? 1 : 0
                } }, label)); }),
            React.createElement("button", { onClick: toggle, style: {
                    display: 'flex', alignItems: 'center', gap: 16,
                    marginTop: '1rem',
                    border: '1px solid rgba(0,255,204,0.2)',
                    padding: '10px 20px',
                    transition: "all 0.4s " + t.nav.length * 60 + "ms",
                    opacity: menuOpen ? 1 : 0
                } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                    React.createElement(CurrentFlag, null),
                    React.createElement("span", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '10px', letterSpacing: '0.15em' } }, lang.toUpperCase())),
                React.createElement("span", { style: { color: '#3a3a5a', fontSize: '12px' } }, "\u2192"),
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, opacity: 0.45 } },
                    React.createElement(NextFlag, null),
                    React.createElement("span", { style: { color: '#888', fontFamily: 'Space Mono,monospace', fontSize: '10px', letterSpacing: '0.15em' } }, nextLabel))),
            React.createElement("a", { href: cvFile, download: true, style: {
                    fontFamily: 'Space Mono,monospace', fontSize: '11px',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: '#00ffcc', border: '1px solid rgba(0,255,204,0.22)',
                    padding: '10px 24px',
                    transition: "all 0.4s " + (t.nav.length + 1) * 60 + "ms",
                    opacity: menuOpen ? 1 : 0
                } },
                cvLabel,
                " \u2192"))));
}
exports["default"] = Navbar;
