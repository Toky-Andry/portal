"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var CustomCursor_1 = require("@/components/ui/CustomCursor");
var Navbar_1 = require("@/components/ui/Navbar");
exports.metadata = {
    title: 'Clickman — Fullstack Developer',
    description: 'Portfolio organique de Clickman, développeur Fullstack créatif.',
    keywords: ['Fullstack', 'Developer', 'Portfolio', 'React', 'Next.js', 'Node.js'],
    openGraph: {
        title: 'Clickman — Fullstack Developer',
        description: 'Portfolio organique de Clickman, développeur Fullstack créatif.',
        type: 'website'
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "fr", suppressHydrationWarning: true },
        React.createElement("head", null,
            React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" })),
        React.createElement("body", null,
            React.createElement(CustomCursor_1["default"], null),
            React.createElement(Navbar_1["default"], null),
            React.createElement("main", null, children))));
}
exports["default"] = RootLayout;
