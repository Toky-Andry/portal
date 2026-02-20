'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CustomCursor() {
    var cursorRef = react_1.useRef(null);
    react_1.useEffect(function () {
        // Détecte souris fine (desktop)
        if (!window.matchMedia('(pointer: fine)').matches) {
            if (cursorRef.current)
                cursorRef.current.style.display = 'none';
            return;
        }
        var cursor = cursorRef.current;
        if (!cursor)
            return;
        var mouseX = window.innerWidth / 2; // ← commence au centre, pas à 0,0
        var mouseY = window.innerHeight / 2;
        var cursorX = mouseX;
        var cursorY = mouseY;
        var speed = 0.35;
        var rafId;
        var onMove = function (e) {
            mouseX = e.clientX - 5;
            mouseY = e.clientY - 5;
        };
        var animate = function () {
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            cursor.style.left = cursorX + "px";
            cursor.style.top = cursorY + "px";
            rafId = requestAnimationFrame(animate);
        };
        var onEnter = function () {
            cursor.style.transform = 'scale(2.5)';
            cursor.style.background = '#9b5de5';
            cursor.style.boxShadow = '0 0 16px #9b5de5';
        };
        var onLeave = function () {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = '#00ffcc';
            cursor.style.boxShadow = '0 0 10px #00ffcc';
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        var attach = function () {
            document.querySelectorAll('a, button, [data-cursor]').forEach(function (el) {
                el.addEventListener('mouseenter', onEnter, { passive: true });
                el.addEventListener('mouseleave', onLeave, { passive: true });
            });
        };
        attach();
        var timeout;
        var obs = new MutationObserver(function () {
            clearTimeout(timeout);
            timeout = setTimeout(attach, 100);
        });
        obs.observe(document.body, { childList: true, subtree: true });
        animate();
        return function () {
            window.removeEventListener('mousemove', onMove);
            obs.disconnect();
            clearTimeout(timeout);
            cancelAnimationFrame(rafId); // ← important pour éviter les fuites mémoire
        };
    }, []);
    return React.createElement("div", { ref: cursorRef, className: "cursor", style: { willChange: 'transform' } });
}
exports["default"] = CustomCursor;
