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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ContactSection = void 0;
var react_1 = require("react");
var useLangStore_1 = require("@/store/useLangStore");
var translations_1 = require("@/lib/translations");
var IconGitHub = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" }))); };
var IconLinkedIn = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }))); };
var IconGitLab = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" }))); };
var IconWhatsApp = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" }))); };
var IconEmail = function () { return (React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", { d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }))); };
var SOCIALS = [
    { name: 'GitHub', href: 'https://github.com/Toky-Andry', icon: React.createElement(IconGitHub, null) },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/toky-andriamananatsoa-750b15381', icon: React.createElement(IconLinkedIn, null) },
    { name: 'GitLab', href: 'https://gitlab.com/khaleb_toky', icon: React.createElement(IconGitLab, null) },
    { name: 'WhatsApp', href: 'https://wa.me/261329320985', icon: React.createElement(IconWhatsApp, null) },
    { name: 'Email', href: 'mailto:itclickmantoky@gmail.com', icon: React.createElement(IconEmail, null) },
];
var IS = {
    width: '100%', padding: '10px 14px',
    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
    color: '#e8e8f0', fontFamily: 'DM Sans,sans-serif', fontSize: '0.8rem',
    outline: 'none', transition: 'all 0.3s'
};
var onF = function (e) {
    e.target.style.borderColor = 'rgba(0,255,204,0.35)';
    e.target.style.boxShadow = '0 0 16px rgba(0,255,204,0.04)';
};
var onB = function (e) {
    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
    e.target.style.boxShadow = 'none';
};
function ContactSection() {
    var _this = this;
    var lang = useLangStore_1.useLangStore().lang;
    var t = translations_1.T[lang].contact;
    var sectionRef = react_1.useRef(null);
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState({ name: '', email: '', message: '' }), form = _b[0], setForm = _b[1];
    var _c = react_1.useState(false), sending = _c[0], setSending = _c[1];
    var _d = react_1.useState(false), sent = _d[0], setSent = _d[1];
    var _e = react_1.useState(false), error = _e[0], setError = _e[1];
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
    var submit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var res, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    setSending(true);
                    setError(false);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, fetch('https://formspree.io/f/xpqjlgvb', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
                        })];
                case 2:
                    res = _b.sent();
                    if (res.ok) {
                        setSent(true);
                        setForm({ name: '', email: '', message: '' });
                    }
                    else
                        setError(true);
                    return [3 /*break*/, 5];
                case 3:
                    _a = _b.sent();
                    setError(true);
                    return [3 /*break*/, 5];
                case 4:
                    setSending(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("section", { id: "contact", ref: sectionRef, className: "min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28 relative overflow-hidden", style: { background: '#0a0a0a' } },
        React.createElement("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none", style: {
                width: 'min(700px,90vw)', height: 300,
                background: 'radial-gradient(ellipse at center bottom,rgba(0,255,204,0.04) 0%,rgba(155,93,229,0.02) 40%,transparent 70%)'
            } }),
        React.createElement("div", { className: "max-w-5xl mx-auto w-full relative z-10" },
            React.createElement("div", { className: "mb-14 text-center sm:text-left transition-all duration-1000 " + (visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') },
                React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '0.75rem' } }, t.label),
                React.createElement("h2", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', fontWeight: 300, marginBottom: '0.75rem' } }, t.h2),
                React.createElement("p", { style: { color: '#7a7a9a', fontFamily: 'DM Sans,sans-serif', fontSize: '0.8rem', maxWidth: 420 } }, t.sub)),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14" },
                React.createElement("div", { className: "transition-all duration-1000 delay-200 " + (visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6') }, !sent ? (React.createElement("form", { onSubmit: submit, className: "space-y-4" },
                    [
                        { key: 'name', label: t.name, type: 'text', ph: t.placeholder_name },
                        { key: 'email', label: t.email, type: 'email', ph: t.placeholder_email },
                    ].map(function (f) { return (React.createElement("div", { key: f.key },
                        React.createElement("label", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' } }, f.label),
                        React.createElement("input", { type: f.type, placeholder: f.ph, value: form[f.key], onChange: function (e) { return setForm(function (p) {
                                var _a;
                                return (__assign(__assign({}, p), (_a = {}, _a[f.key] = e.target.value, _a)));
                            }); }, style: IS, required: true, onFocus: onF, onBlur: onB }))); }),
                    React.createElement("div", null,
                        React.createElement("label", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' } }, t.message),
                        React.createElement("textarea", { placeholder: t.placeholder_msg, rows: 5, value: form.message, onChange: function (e) { return setForm(function (p) { return (__assign(__assign({}, p), { message: e.target.value })); }); }, style: __assign(__assign({}, IS), { resize: 'none' }), required: true, onFocus: onF, onBlur: onB })),
                    error && (React.createElement("p", { style: { color: '#ff6b6b', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.1em' } }, t.error_msg)),
                    React.createElement("button", { type: "submit", disabled: sending, "data-cursor": "true", style: { width: '100%', padding: '12px', background: sending ? 'transparent' : 'rgba(0,255,204,0.08)', border: '1px solid rgba(0,255,204,0.35)', color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', cursor: sending ? 'not-allowed' : 'pointer', transition: 'all 0.3s' } }, sending ? t.sending : t.send))) : (React.createElement("div", { className: "glass flex flex-col items-center justify-center py-16 text-center px-8" },
                    React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Cormorant Garamond,serif', fontSize: '3rem', marginBottom: '1rem' } }, "\u2726"),
                    React.createElement("h3", { style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: '1.4rem', fontWeight: 300, marginBottom: '0.5rem' } }, t.sent_title),
                    React.createElement("p", { style: { color: '#7a7a9a', fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem' } }, t.sent_sub)))),
                React.createElement("div", { className: "space-y-6 transition-all duration-1000 delay-400 " + (visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6') },
                    React.createElement("div", null,
                        React.createElement("p", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.6rem' } }, t.direct),
                        React.createElement("a", { href: "mailto:itclickmantoky@gmail.com", style: { fontFamily: 'Cormorant Garamond,serif', color: '#e8e8f0', fontSize: 'clamp(1rem,2.5vw,1.4rem)', fontWeight: 300, transition: 'color 0.3s', display: 'block' }, onMouseEnter: function (e) { return (e.currentTarget.style.color = '#00ffcc'); }, onMouseLeave: function (e) { return (e.currentTarget.style.color = '#e8e8f0'); } }, "itclickmantoky@gmail.com")),
                    React.createElement("a", { href: "https://wa.me/261329320985", target: "_blank", rel: "noopener noreferrer", "data-cursor": "true", className: "group", style: { display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: '1px solid rgba(37,211,102,0.2)', background: 'rgba(37,211,102,0.04)', transition: 'all 0.35s', textDecoration: 'none' }, onMouseEnter: function (e) { e.currentTarget.style.border = '1px solid rgba(37,211,102,0.5)'; e.currentTarget.style.background = 'rgba(37,211,102,0.08)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(37,211,102,0.06)'; }, onMouseLeave: function (e) { e.currentTarget.style.border = '1px solid rgba(37,211,102,0.2)'; e.currentTarget.style.background = 'rgba(37,211,102,0.04)'; e.currentTarget.style.boxShadow = 'none'; } },
                        React.createElement("div", { style: { width: 38, height: 38, borderRadius: '50%', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#25D366' } },
                            React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" },
                                React.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" }))),
                        React.createElement("div", { style: { flex: 1 } },
                            React.createElement("p", { style: { color: '#25D366', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '3px' } }, "WhatsApp"),
                            React.createElement("p", { style: { color: '#e8e8f0', fontFamily: 'DM Sans,sans-serif', fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0.06em' } }, "+261 32 93 209 85")),
                        React.createElement("span", { style: { color: '#25D366', fontSize: '1rem', opacity: 0.5, transition: 'all 0.3s' }, className: "group-hover:opacity-100 group-hover:translate-x-1" }, "\u2192")),
                    React.createElement("div", null,
                        React.createElement("p", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' } }, t.socials),
                        React.createElement("div", { className: "space-y-3" }, SOCIALS.map(function (s) { return (React.createElement("a", { key: s.name, href: s.href, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 group", "data-cursor": "true" },
                            React.createElement("span", { style: { color: '#3a3a5a', transition: 'color 0.3s' }, className: "group-hover:text-[#00ffcc]" }, s.icon),
                            React.createElement("span", { style: { color: '#5a5a7a', fontFamily: 'Space Mono,monospace', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'color 0.3s' }, className: "group-hover:text-[#00ffcc]" }, s.name),
                            React.createElement("span", { className: "ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300", style: { color: '#00ffcc', fontSize: '0.8rem' } }, "\u2192"))); }))),
                    React.createElement("div", { style: { border: '1px solid rgba(0,255,204,0.1)', background: 'rgba(0,255,204,0.02)', padding: '1rem' } },
                        React.createElement("p", { style: { color: '#00ffcc', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' } }, t.availability),
                        React.createElement("p", { style: { color: '#7a7a9a', fontFamily: 'DM Sans,sans-serif', fontSize: '0.78rem', lineHeight: 1.65 } },
                            t.availText,
                            " ",
                            React.createElement("strong", { style: { color: '#e8e8f0' } }, t.delay),
                            ".")))),
            React.createElement("div", { className: "mt-16 pt-6 text-center", style: { borderTop: '1px solid rgba(255,255,255,0.04)' } },
                React.createElement("p", { style: { color: '#3a3a5a', fontFamily: 'Space Mono,monospace', fontSize: '8px', letterSpacing: '0.1em' } }, t.footer)))));
}
exports.ContactSection = ContactSection;
exports["default"] = ContactSection;
