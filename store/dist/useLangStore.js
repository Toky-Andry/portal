"use strict";
exports.__esModule = true;
exports.useLangStore = void 0;
// store/useLangStore.ts
var zustand_1 = require("zustand");
exports.useLangStore = zustand_1.create(function (set, get) { return ({
    lang: 'en',
    setLang: function (lang) { return set({ lang: lang }); },
    toggle: function () { return set({ lang: get().lang === 'fr' ? 'en' : 'fr' }); }
}); });
