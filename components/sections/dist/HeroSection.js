'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dynamic_1 = require("next/dynamic");
var useLangStore_1 = require("@/store/useLangStore");
var translations_1 = require("@/lib/translations");
var Face3D = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require('@/components/ui/Face3D'); }); }, {
    ssr: false,
    loading: function () { return (React.createElement("div", { style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
        React.createElement("div", { style: { width: 8, height: 8, borderRadius: '50%', background: '#00ffcc', boxShadow: '0 0 12px #00ffcc' } }))); }
});
var SKILLS = [
    { id: 'react', color: '#00ffcc', side: 'left', label: 'React / Next.js', icon: '⚛' },
    { id: 'node', color: '#ffd93d', side: 'left', label: 'Node.js / API', icon: '⬡' },
    { id: 'docker', color: '#00ffcc', side: 'left', label: 'Docker / CI-CD', icon: '◉' },
    { id: 'ts', color: '#9b5de5', side: 'right', label: 'TypeScript', icon: 'TS' },
    { id: 'db', color: '#ff6b6b', side: 'right', label: 'PostgreSQL', icon: '◈' },
    { id: 'design', color: '#9b5de5', side: 'right', label: 'UI / Figma', icon: '✦' },
];
function SkillBadge(_a) {
    var skill = _a.skill, i = _a.i, dir = _a.dir;
    var isLeft = dir === 'left';
    return (React.createElement("div", { style: {
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexDirection: isLeft ? 'row' : 'row-reverse'
        } },
        React.createElement("div", { style: {
                background: 'rgba(4,4,10,0.88)',
                border: "1px solid " + skill.color + "40",
                padding: '4px 10px',
                backdropFilter: 'blur(10px)',
                display: 'flex', alignItems: 'center', gap: 5,
                whiteSpace: 'nowrap'
            } },
            React.createElement("span", { style: { color: skill.color, fontFamily: 'Space Mono,monospace', fontSize: '8px', fontWeight: 700 } }, skill.icon),
            React.createElement("span", { style: { color: '#c8c8e0', fontFamily: 'Space Mono,monospace', fontSize: '7px', letterSpacing: '0.1em', textTransform: 'uppercase' } }, skill.label)),
        React.createElement("div", { style: {
                width: 16, height: 1, flexShrink: 0,
                background: isLeft
                    ? "linear-gradient(to right, " + skill.color + "80, " + skill.color + "20)"
                    : "linear-gradient(to left, " + skill.color + "80, " + skill.color + "20)"
            } }),
        React.createElement("div", { style: { position: 'relative', flexShrink: 0 } },
            React.createElement("span", { style: {
                    position: 'absolute', width: 18, height: 18, borderRadius: '50%',
                    background: skill.color + '20', top: -4, left: -4,
                    animation: 'ping 2.2s ease-out infinite',
                    animationDelay: i * 0.4 + "s"
                } }),
            React.createElement("span", { style: { display: 'block', width: 8, height: 8, borderRadius: '50%', background: skill.color, boxShadow: "0 0 6px " + skill.color + ", 0 0 14px " + skill.color + "55" } }))));
}
function HeroSection() {
    var lang = useLangStore_1.useLangStore().lang;
    var t = translations_1.T[lang].hero;
    var canvasRef = react_1.useRef(null);
    var animRef = react_1.useRef(0);
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    var _b = react_1.useState(240), faceSize = _b[0], setFaceSize = _b[1];
    var _c = react_1.useState(false), isMobile = _c[0], setIsMobile = _c[1];
    react_1.useEffect(function () {
        var update = function () {
            var w = window.innerWidth;
            var mobile = w < 640;
            setIsMobile(mobile);
            if (mobile) {
                // Mobile : tête prend 70% de la largeur, max 260px
                setFaceSize(Math.min(260, Math.max(180, w * 0.65)));
            }
            else if (w < 1024) {
                // Tablet
                setFaceSize(Math.min(280, w * 0.35));
            }
            else {
                // Desktop
                setFaceSize(Math.min(320, w * 0.28));
            }
        };
        update();
        setMounted(true);
        window.addEventListener('resize', update);
        return function () { return window.removeEventListener('resize', update); };
    }, []);
    // Canvas veins
    react_1.useEffect(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        var tick = 0;
        var resize = function () { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
        resize();
        window.addEventListener('resize', resize);
        var mkVeins = function (cx, cy) { return [
            { sx: cx, sy: cy - 80, ex: cx - 60, ey: cy - 160, c: '#9b5de5' },
            { sx: cx, sy: cy - 80, ex: cx + 60, ey: cy - 160, c: '#9b5de5' },
            { sx: cx - 20, sy: cy, ex: cx - 80, ey: cy - 40, c: '#00ffcc' },
            { sx: cx + 20, sy: cy, ex: cx + 80, ey: cy - 40, c: '#00ffcc' },
            { sx: cx, sy: cy + 20, ex: cx - 30, ey: cy + 100, c: '#ffd93d' },
            { sx: cx, sy: cy + 20, ex: cx + 30, ey: cy + 100, c: '#ffd93d' },
            { sx: cx - 60, sy: cy + 20, ex: cx - 120, ey: cy + 80, c: '#00ffcc' },
            { sx: cx + 60, sy: cy + 20, ex: cx + 120, ey: cy + 80, c: '#00ffcc' },
        ]; };
        var draw = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var cx = canvas.width / 2, cy = canvas.height / 2;
            mkVeins(cx, cy).forEach(function (v, i) {
                var off = Math.sin(tick * 0.02 + i) * 20;
                var g = ctx.createLinearGradient(v.sx, v.sy, v.ex, v.ey);
                g.addColorStop(0, v.c + '00');
                g.addColorStop(0.5, v.c + '80');
                g.addColorStop(1, v.c + '00');
                ctx.beginPath();
                ctx.moveTo(v.sx, v.sy);
                ctx.bezierCurveTo(v.sx + off, v.sy + off / 2, v.ex + off, v.ey - off / 2, v.ex, v.ey);
                ctx.strokeStyle = g;
                ctx.lineWidth = 1 + Math.sin(tick * 0.03 + i) * 0.5;
                ctx.stroke();
                var p = (Math.sin(tick * 0.03 + i * 0.5) + 1) / 2;
                ctx.beginPath();
                ctx.arc(v.sx + (v.ex - v.sx) * p, v.sy + (v.ey - v.sy) * p, 2, 0, Math.PI * 2);
                ctx.fillStyle = v.c;
                ctx.shadowBlur = 8;
                ctx.shadowColor = v.c;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            tick++;
            animRef.current = requestAnimationFrame(draw);
        };
        draw();
        return function () { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
    }, []);
    var leftSkills = SKILLS.filter(function (s) { return s.side === 'left'; });
    var rightSkills = SKILLS.filter(function (s) { return s.side === 'right'; });
    return (React.createElement("section", { id: "hero", className: "relative min-h-screen flex items-center justify-center overflow-hidden", style: { background: '#0a0a0a', paddingTop: '72px' } },
        React.createElement("div", { className: "absolute inset-0 pointer-events-none" },
            React.createElement("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", style: {
                    width: 'min(600px,80vw)', height: 'min(600px,80vw)',
                    background: 'radial-gradient(ellipse,rgba(0,255,204,0.05) 0%,rgba(155,93,229,0.03) 40%,transparent 70%)',
                    animation: 'breathe 4s ease-in-out infinite', borderRadius: '50%'
                } })),
        React.createElement("canvas", { ref: canvasRef, className: "absolute inset-0 w-full h-full pointer-events-none", style: { zIndex: 1 } }),
        React.createElement("div", { className: "relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto px-4 sm:px-8 py-8" },
            React.createElement("div", { className: "transition-all duration-1000 " + (mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'), style: { marginBottom: 'clamp(0.8rem,2vw,1.5rem)' } },
                React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '12px', letterSpacing: '0.45em', textTransform: 'uppercase', marginBottom: '0.65rem' } }, t.sub),
                React.createElement("div", { className: "relative overflow-hidden" },
                    React.createElement("h1", { style: {
                            fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0',
                            fontSize: 'clamp(0.85rem,2.8vw,2.4rem)', letterSpacing: '0.14em',
                            lineHeight: 1.05, fontWeight: 300,
                            textShadow: '0 0 40px rgba(0,255,204,0.1)', whiteSpace: 'nowrap'
                        } },
                        "Tokiniaina",
                        React.createElement("span", { style: { color: '#00ffcc40', margin: '0 0.4em', fontSize: '0.55em', verticalAlign: 'middle' } }, "\u00B7"),
                        React.createElement("span", { style: { color: '#8888b0', letterSpacing: '0.1em' } }, "ANDRIAMANANTSOA")),
                    React.createElement("div", { style: { height: 1, marginTop: '0.45rem', background: 'linear-gradient(to right,transparent,#00ffcc35,transparent)' } })),
                React.createElement("p", { style: { color: '#5a5a7a', fontFamily: 'DM Sans,sans-serif', fontSize: '8px', letterSpacing: '0.28em', textTransform: 'uppercase', marginTop: '0.5rem' } }, t.tag)),
            !isMobile ? (
            /* ── DESKTOP / TABLET ── */
            React.createElement("div", { className: "transition-all duration-1000 delay-300 " + (mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'), style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(8px, 1.5vw, 24px)',
                    width: '100%',
                    marginBottom: 'clamp(0.5rem,2vw,1.5rem)'
                } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.8vw,20px)', alignItems: 'flex-end', flexShrink: 0 } }, leftSkills.map(function (skill, i) { return (React.createElement("div", { key: skill.id, style: { opacity: mounted ? 1 : 0, transition: "opacity 0.7s ease " + (500 + i * 150) + "ms" } },
                    React.createElement(SkillBadge, { skill: skill, i: i, dir: "left" }))); })),
                React.createElement("div", { style: { width: faceSize, height: faceSize, flexShrink: 0, zIndex: 5 } }, mounted && React.createElement(Face3D, { size: faceSize })),
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.8vw,20px)', alignItems: 'flex-start', flexShrink: 0 } }, rightSkills.map(function (skill, i) { return (React.createElement("div", { key: skill.id, style: { opacity: mounted ? 1 : 0, transition: "opacity 0.7s ease " + (500 + i * 150) + "ms" } },
                    React.createElement(SkillBadge, { skill: skill, i: i, dir: "right" }))); })))) : (
            /* ── MOBILE ── */
            React.createElement("div", { className: "transition-all duration-1000 delay-300 " + (mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'), style: { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, marginBottom: '1.5rem' } },
                React.createElement("div", { style: { width: faceSize, height: faceSize, flexShrink: 0, zIndex: 5 } }, mounted && React.createElement(Face3D, { size: faceSize })),
                React.createElement("div", { style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px 12px',
                        width: '100%',
                        maxWidth: 360
                    } }, SKILLS.map(function (skill, i) { return (React.createElement("div", { key: skill.id, style: {
                        opacity: mounted ? 1 : 0,
                        transition: "opacity 0.6s ease " + (400 + i * 100) + "ms",
                        background: 'rgba(4,4,10,0.88)',
                        border: "1px solid " + skill.color + "40",
                        padding: '6px 10px',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6
                    } },
                    React.createElement("span", { style: { color: skill.color, fontFamily: 'Space Mono,monospace', fontSize: '9px', fontWeight: 700 } }, skill.icon),
                    React.createElement("span", { style: { color: '#c8c8e0', fontFamily: 'Space Mono,monospace', fontSize: '7px', letterSpacing: '0.08em', textTransform: 'uppercase' } }, skill.label))); })))),
            React.createElement("div", { className: "flex flex-col items-center gap-2 transition-all duration-1000 delay-700 " + (mounted ? 'opacity-100' : 'opacity-0') },
                React.createElement("p", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '7px', letterSpacing: '0.35em', textTransform: 'uppercase' } }, t.explore),
                React.createElement("div", { className: "w-px h-9 relative overflow-hidden", style: { background: '#5a5a7a18' } },
                    React.createElement("div", { className: "absolute top-0 w-full", style: { background: 'linear-gradient(to bottom,transparent,#00ffcc,transparent)', height: '50%', animation: 'vein-flow 1.5s linear infinite' } }))))));
}
exports["default"] = HeroSection;
