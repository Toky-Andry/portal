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
exports.SkillsSection = void 0;
var react_1 = require("react");
var useLangStore_1 = require("@/store/useLangStore");
var translations_1 = require("@/lib/translations");
var SKILLS_DATA = [
    {
        skills: [
            { name: 'React.js / Next.js', level: 92 },
            { name: 'TypeScript', level: 88 },
            { name: 'Vue.js', level: 80 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Bootstrap', level: 90 },
        ]
    },
    {
        skills: [
            { name: 'Node.js / Express.js', level: 90 },
            { name: 'Python', level: 75 },
            { name: 'PHP / Laravel', level: 82 },
            { name: 'Fastify', level: 80 },
            { name: 'REST API / JWT', level: 88 },
        ]
    },
    {
        skills: [
            { name: 'PostgreSQL', level: 88 },
            { name: 'MySQL', level: 90 },
            { name: 'MongoDB', level: 85 },
            { name: 'Firebase', level: 82 },
            { name: 'Git / GitLab', level: 92 },
        ]
    },
];
var OTHER_TOOLS = ['Flutter', 'Docker', 'Figma', 'Stripe', 'Vercel', 'Postman'];
function SkillsSection() {
    var lang = useLangStore_1.useLangStore().lang;
    var t = translations_1.T[lang].skills;
    var sectionRef = react_1.useRef(null);
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(0), activeCategory = _b[0], setActiveCategory = _b[1];
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
    var active = __assign(__assign({}, t.categories[activeCategory]), SKILLS_DATA[activeCategory]);
    return (React.createElement("section", { id: "skills", ref: sectionRef, className: "min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28", style: { background: '#0d0d0d' } },
        React.createElement("div", { className: "max-w-5xl mx-auto w-full" },
            React.createElement("div", { className: "mb-14 text-center sm:text-left transition-all duration-1000 " + (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') },
                React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '0.75rem' } }, t.label),
                React.createElement("h2", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 300 } }, t.h2)),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start" },
                React.createElement("div", { className: "space-y-2 transition-all duration-1000 " + (visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6') },
                    t.categories.map(function (cat, i) { return (React.createElement("button", { key: cat.name, onClick: function () { return setActiveCategory(i); }, className: "w-full text-left p-4 transition-all duration-300", style: {
                            background: activeCategory === i ? cat.color + "08" : 'transparent',
                            border: "1px solid " + (activeCategory === i ? cat.color + '35' : 'rgba(255,255,255,0.04)'),
                            borderLeft: "2px solid " + (activeCategory === i ? cat.color : 'transparent')
                        }, "data-cursor": "true" },
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("span", { style: { color: activeCategory === i ? cat.color : '#3a3a5a', fontSize: '0.9rem' } }, cat.icon),
                            React.createElement("div", null,
                                React.createElement("p", { style: { fontFamily: 'Cormorant Garamond,serif', color: activeCategory === i ? '#e8e8f0' : '#5a5a7a', fontSize: '1rem', fontWeight: 300, transition: 'color 0.3s' } }, cat.name),
                                React.createElement("p", { style: { color: activeCategory === i ? cat.color : '#3a3a5a', fontFamily: 'Space Mono,monospace', fontSize: '8px', marginTop: '1px' } },
                                    SKILLS_DATA[i].skills.length,
                                    " ",
                                    t.tech)),
                            React.createElement("span", { className: "ml-auto", style: { color: activeCategory === i ? cat.color : 'transparent', fontSize: '0.8rem', transition: 'color 0.3s' } }, "\u2192")))); }),
                    React.createElement("div", { className: "pt-5" },
                        React.createElement("p", { style: { color: '#3a3a5a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' } }, t.others),
                        React.createElement("div", { className: "flex flex-wrap gap-1.5" }, OTHER_TOOLS.map(function (tool) { return (React.createElement("span", { key: tool, style: { border: '1px solid rgba(255,255,255,0.06)', color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', padding: '3px 10px' } }, tool)); })))),
                React.createElement("div", { className: "transition-all duration-1000 delay-200 " + (visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6') },
                    React.createElement("div", { className: "glass p-5 sm:p-6", style: { border: "1px solid " + active.color + "18" } },
                        React.createElement("h3", { style: { fontFamily: 'Cormorant Garamond,serif', color: active.color, fontSize: '1.4rem', fontWeight: 300, marginBottom: '1.5rem' } }, active.name),
                        React.createElement("div", { className: "space-y-4" }, active.skills.map(function (skill, i) { return (React.createElement("div", { key: skill.name },
                            React.createElement("div", { className: "flex justify-between mb-1.5" },
                                React.createElement("span", { style: { color: '#e8e8f0', fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem' } }, skill.name),
                                React.createElement("span", { style: { color: active.color, fontFamily: 'Space Mono,monospace', fontSize: '9px' } },
                                    skill.level,
                                    "%")),
                            React.createElement("div", { className: "h-px w-full relative overflow-hidden", style: { background: 'rgba(255,255,255,0.05)' } },
                                React.createElement("div", { className: "absolute top-0 left-0 h-full transition-all duration-1000", style: {
                                        width: visible ? skill.level + "%" : '0%',
                                        background: "linear-gradient(to right," + active.color + "60," + active.color + ")",
                                        transitionDelay: i * 100 + 400 + "ms",
                                        boxShadow: "0 0 8px " + active.color + "80"
                                    } })))); }))))))));
}
exports.SkillsSection = SkillsSection;
exports["default"] = SkillsSection;
