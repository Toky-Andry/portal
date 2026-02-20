'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ProjectsSection = void 0;
var react_1 = require("react");
var image_1 = require("next/image");
var useLangStore_1 = require("@/store/useLangStore");
var translations_1 = require("@/lib/translations");
var IconGitHub = function () { return (React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" }))); };
var IconGitLab = function () { return (React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" }))); };
var IconImage = function () { return (React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
    React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
    React.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
    React.createElement("path", { d: "M21 15l-5-5L5 21" }))); };
function ProjectsSection() {
    var lang = useLangStore_1.useLangStore().lang;
    var t = translations_1.T[lang].projects;
    var sectionRef = react_1.useRef(null);
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(null), hoveredId = _b[0], setHoveredId = _b[1];
    var _c = react_1.useState(false), showAll = _c[0], setShowAll = _c[1];
    var _d = react_1.useState(null), lightbox = _d[0], setLightbox = _d[1];
    var VISIBLE_COUNT = 4;
    var displayedProjects = showAll ? t.items : t.items.slice(0, VISIBLE_COUNT);
    var hiddenCount = t.items.length - VISIBLE_COUNT;
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
    react_1.useEffect(function () {
        var onKey = function (e) {
            if (!lightbox)
                return;
            if (e.key === 'Escape')
                setLightbox(null);
            if (e.key === 'ArrowLeft' && lightbox.currentIndex > 0)
                setLightbox(__assign(__assign({}, lightbox), { currentIndex: lightbox.currentIndex - 1 }));
            if (e.key === 'ArrowRight' && lightbox.currentIndex < lightbox.project.images.length - 1)
                setLightbox(__assign(__assign({}, lightbox), { currentIndex: lightbox.currentIndex + 1 }));
        };
        window.addEventListener('keydown', onKey);
        return function () { return window.removeEventListener('keydown', onKey); };
    }, [lightbox]);
    // Bloquer le scroll quand lightbox ouverte
    react_1.useEffect(function () {
        if (lightbox) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }
        return function () { document.body.style.overflow = ''; };
    }, [lightbox]);
    var openLightbox = function (project) {
        if (project.images.length > 0)
            setLightbox({ project: project, currentIndex: 0, zoomed: false });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { id: "projects", ref: sectionRef, className: "min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28", style: { background: '#0a0a0a' } },
            React.createElement("div", { className: "max-w-5xl mx-auto w-full" },
                React.createElement("div", { className: "flex items-end justify-between mb-14 transition-all duration-1000 " + (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') },
                    React.createElement("div", { className: "text-center sm:text-left w-full sm:w-auto" },
                        React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '0.75rem' } }, t.label),
                        React.createElement("h2", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 300 } }, t.h2))),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, displayedProjects.map(function (project, i) {
                    var isHovered = hoveredId === project.id;
                    var hasImages = project.images.length > 0;
                    var hasGithub = !!project.github;
                    var hasGitlab = !!project.gitlab;
                    var isConfidential = project.confidential;
                    var isInProgress = project.inProgress;
                    return (React.createElement("div", { key: project.id, className: "organic-card relative glass p-5 sm:p-6 transition-all duration-1000 " + (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'), style: {
                            transitionDelay: i * 120 + "ms",
                            border: isHovered ? "1px solid " + project.color + "25" : '1px solid rgba(255,255,255,0.04)',
                            borderLeft: "2px solid " + (isHovered ? project.color : 'transparent')
                        }, onMouseEnter: function () { return setHoveredId(project.id); }, onMouseLeave: function () { return setHoveredId(null); } },
                        React.createElement("div", { className: "flex items-start justify-between mb-4" },
                            React.createElement("span", { style: { fontFamily: 'Cormorant Garamond,serif', color: isHovered ? project.color : '#1e1e30', fontSize: '2.8rem', fontWeight: 300, lineHeight: 1, transition: 'color 0.4s' } }, project.id),
                            React.createElement("div", { className: "flex items-center gap-2 flex-wrap justify-end" },
                                isInProgress && (React.createElement("span", { style: { border: '1px solid rgba(255,80,80,0.5)', color: '#ff5050', background: 'rgba(255,80,80,0.08)', fontFamily: 'Space Mono,monospace', fontSize: '7px', padding: '3px 8px', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4, animation: 'pulse 2s ease-in-out infinite' } },
                                    "\u25CF ",
                                    t.inProgress)),
                                isConfidential && (React.createElement("span", { style: { border: '1px solid rgba(255,255,255,0.08)', color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '7px', padding: '3px 8px', letterSpacing: '0.08em', textTransform: 'uppercase' } }, "\uD83D\uDD12 NDA")),
                                React.createElement("span", { style: { border: "1px solid " + project.color + "30", color: project.color, fontFamily: 'Space Mono,monospace', fontSize: '8px', padding: '3px 10px', letterSpacing: '0.1em', textTransform: 'uppercase' } }, project.category))),
                        React.createElement("h3", { style: { fontFamily: 'Cormorant Garamond,serif', color: isHovered ? '#ffffff' : '#e8e8f0', fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 300, marginBottom: '0.5rem', transition: 'color 0.3s' } }, project.title),
                        React.createElement("p", { style: { color: '#7a7a9a', fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', lineHeight: 1.65, marginBottom: '1.25rem' } }, project.description),
                        React.createElement("div", { className: "flex flex-wrap gap-1.5 mb-5" }, project.tags.map(function (tag) { return (React.createElement("span", { key: tag, style: { color: '#5a5a7a', background: 'rgba(255,255,255,0.03)', fontFamily: 'Space Mono,monospace', fontSize: '8px', padding: '2px 8px' } }, tag)); })),
                        React.createElement("div", { className: "flex items-center gap-2 flex-wrap" },
                            hasGithub && (React.createElement("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", onClick: function (e) { return e.stopPropagation(); }, style: { display: 'flex', alignItems: 'center', gap: 5, color: '#c8c8e0', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 10px', transition: 'all 0.3s', background: 'rgba(255,255,255,0.02)' }, onMouseEnter: function (e) { e.currentTarget.style.borderColor = '#ffffff40'; e.currentTarget.style.color = '#ffffff'; }, onMouseLeave: function (e) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#c8c8e0'; } },
                                React.createElement(IconGitHub, null),
                                " GitHub")),
                            hasGitlab && (React.createElement("a", { href: project.gitlab, target: "_blank", rel: "noopener noreferrer", onClick: function (e) { return e.stopPropagation(); }, style: { display: 'flex', alignItems: 'center', gap: 5, color: '#fc6d26', border: '1px solid rgba(252,109,38,0.25)', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 10px', transition: 'all 0.3s', background: 'rgba(252,109,38,0.04)' }, onMouseEnter: function (e) { e.currentTarget.style.borderColor = '#fc6d2680'; e.currentTarget.style.background = 'rgba(252,109,38,0.08)'; }, onMouseLeave: function (e) { e.currentTarget.style.borderColor = 'rgba(252,109,38,0.25)'; e.currentTarget.style.background = 'rgba(252,109,38,0.04)'; } },
                                React.createElement(IconGitLab, null),
                                " GitLab")),
                            hasImages && (React.createElement("button", { onClick: function () { return openLightbox(project); }, style: { display: 'flex', alignItems: 'center', gap: 5, color: project.color, border: "1px solid " + project.color + "35", fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 10px', transition: 'all 0.3s', background: project.color + "05", cursor: 'pointer' }, onMouseEnter: function (e) { e.currentTarget.style.background = project.color + "12"; e.currentTarget.style.borderColor = project.color + "60"; }, onMouseLeave: function (e) { e.currentTarget.style.background = project.color + "05"; e.currentTarget.style.borderColor = project.color + "35"; }, "data-cursor": "true" },
                                React.createElement(IconImage, null),
                                " ",
                                t.see,
                                " (",
                                project.images.length,
                                ")")),
                            isConfidential && !hasImages && !hasGithub && !hasGitlab && (React.createElement("span", { style: { display: 'flex', alignItems: 'center', gap: 5, color: '#3a3a5a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 10px', border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' } },
                                "\uD83D\uDD12 ",
                                lang === 'fr' ? 'Projet professionnel ESN' : 'Professional ESN project')),
                            isInProgress && !hasImages && !hasGithub && !hasGitlab && !isConfidential && (React.createElement("span", { style: { display: 'flex', alignItems: 'center', gap: 5, color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 10px', border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' } }, lang === 'fr' ? 'Disponible bientôt' : 'Coming soon'))),
                        isHovered && (React.createElement("div", { className: "absolute inset-0 pointer-events-none", style: { background: "radial-gradient(ellipse at 30% 30%," + project.color + "06,transparent 60%)" } }))));
                })),
                hiddenCount > 0 && (React.createElement("div", { className: "flex justify-center mt-10" },
                    React.createElement("button", { onClick: function () { return setShowAll(function (prev) { return !prev; }); }, style: { fontFamily: 'Space Mono,monospace', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00ffcc', border: '1px solid rgba(0,255,204,0.22)', padding: '10px 24px', transition: 'all 0.3s', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }, onMouseEnter: function (e) { return (e.currentTarget.style.background = 'rgba(0,255,204,0.07)'); }, onMouseLeave: function (e) { return (e.currentTarget.style.background = 'transparent'); }, "data-cursor": "true" }, showAll
                        ? React.createElement(React.Fragment, null,
                            React.createElement("span", { style: { display: 'inline-block', transform: 'rotate(180deg)' } }, "\u2193"),
                            lang === 'fr' ? 'Voir moins' : 'See less')
                        : React.createElement(React.Fragment, null,
                            React.createElement("span", null, "\u2193"),
                            lang === 'fr' ? "Voir plus de projets (" + hiddenCount + ")" : "See more projects (" + hiddenCount + ")")))))),
        lightbox && (React.createElement("div", { className: "fixed inset-0 z-[999] flex flex-col items-center justify-center p-4", style: { background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)' }, onClick: function () { return setLightbox(null); } },
            React.createElement("button", { onClick: function () { return setLightbox(null); }, className: "absolute top-4 right-4 w-10 h-10 flex items-center justify-center z-10", style: { color: '#00ffcc', fontSize: '20px', border: '1px solid rgba(0,255,204,0.3)', background: 'rgba(0,255,204,0.05)', cursor: 'pointer' } }, "\u2715"),
            React.createElement("div", { className: "absolute top-4 left-4 right-16 z-10" },
                React.createElement("h3", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1rem,2vw,1.4rem)', fontWeight: 300 } }, lightbox.project.title),
                React.createElement("p", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', marginTop: '3px' } },
                    lightbox.currentIndex + 1,
                    " / ",
                    lightbox.project.images.length,
                    lightbox.zoomed
                        ? (lang === 'fr' ? ' — Zoom actif' : ' — Zoom active')
                        : (lang === 'fr' ? ' — Double-clic pour zoomer' : ' — Double-click to zoom'))),
            React.createElement("div", { className: "relative flex items-center justify-center", style: {
                    width: '100%',
                    maxWidth: lightbox.zoomed ? '95vw' : '860px',
                    // ✅ Hauteur fixe pour laisser de la place aux thumbnails en bas
                    maxHeight: 'calc(100vh - 140px)',
                    transition: 'all 0.3s'
                }, onClick: function (e) { return e.stopPropagation(); }, onDoubleClick: function () { return setLightbox(__assign(__assign({}, lightbox), { zoomed: !lightbox.zoomed })); } },
                React.createElement(image_1["default"], { src: lightbox.project.images[lightbox.currentIndex], alt: lightbox.project.title + " - " + (lightbox.currentIndex + 1), width: 1920, height: 1080, style: {
                        width: '100%',
                        height: 'auto',
                        maxHeight: 'calc(100vh - 140px)',
                        objectFit: 'contain',
                        cursor: lightbox.zoomed ? 'zoom-out' : 'zoom-in'
                    }, className: "rounded" })),
            lightbox.currentIndex > 0 && (React.createElement("button", { onClick: function (e) { e.stopPropagation(); setLightbox(__assign(__assign({}, lightbox), { currentIndex: lightbox.currentIndex - 1 })); }, className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center", style: { color: '#00ffcc', fontSize: '24px', border: '1px solid rgba(0,255,204,0.3)', background: 'rgba(0,255,204,0.08)', cursor: 'pointer' } }, "\u2190")),
            lightbox.currentIndex < lightbox.project.images.length - 1 && (React.createElement("button", { onClick: function (e) { e.stopPropagation(); setLightbox(__assign(__assign({}, lightbox), { currentIndex: lightbox.currentIndex + 1 })); }, className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center", style: { color: '#00ffcc', fontSize: '24px', border: '1px solid rgba(0,255,204,0.3)', background: 'rgba(0,255,204,0.08)', cursor: 'pointer' } }, "\u2192")),
            React.createElement("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center", onClick: function (e) { return e.stopPropagation(); } },
                React.createElement("div", { className: "flex gap-2 px-4", style: {
                        maxWidth: '100vw',
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        // scrollbar invisible
                        scrollbarWidth: 'none'
                    } }, lightbox.project.images.map(function (img, i) { return (React.createElement("button", { key: i, onClick: function () { return setLightbox(__assign(__assign({}, lightbox), { currentIndex: i, zoomed: false })); }, style: {
                        // ✅ Taille fixe absolue — ne peut pas s'étirer
                        flexShrink: 0,
                        width: 52,
                        height: 36,
                        padding: 0,
                        overflow: 'hidden',
                        borderRadius: 2,
                        border: i === lightbox.currentIndex
                            ? "2px solid " + lightbox.project.color
                            : '2px solid rgba(255,255,255,0.1)',
                        opacity: i === lightbox.currentIndex ? 1 : 0.45,
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                        background: '#111',
                        // ✅ display:block pour que Image ne crée pas d'espace inline
                        display: 'block',
                        position: 'relative'
                    } },
                    React.createElement("div", { style: { position: 'relative', width: 52, height: 36 } },
                        React.createElement(image_1["default"], { src: img, alt: "", fill: true, style: { objectFit: 'cover' }, sizes: "52px" })))); })))))));
}
exports.ProjectsSection = ProjectsSection;
exports["default"] = ProjectsSection;
