'use client';
"use strict";
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
var react_1 = require("react");
function Face3D(_a) {
    var _this = this;
    var _b = _a.size, size = _b === void 0 ? 300 : _b;
    var mountRef = react_1.useRef(null);
    react_1.useEffect(function () {
        var mount = mountRef.current;
        if (!mount)
            return;
        while (mount.firstChild)
            mount.removeChild(mount.firstChild);
        var rafId;
        var disposed = false;
        var renderer;
        var init = function () { return __awaiter(_this, void 0, void 0, function () {
            var THREE, GLTFLoader, scene, camera, keyLight, fillTeal, rimViolet, loader, headMesh, targetRX, targetRY, currentRX, currentRY, autoAngle, onMouseMove, onTouchMove, animate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('three'); })];
                    case 1:
                        THREE = _a.sent();
                        return [4 /*yield*/, Promise.resolve().then(function () { return require('three/examples/jsm/loaders/GLTFLoader.js'); })];
                    case 2:
                        GLTFLoader = (_a.sent()).GLTFLoader;
                        if (disposed)
                            return [2 /*return*/];
                        scene = new THREE.Scene();
                        camera = new THREE.PerspectiveCamera(28, 1, 0.01, 100);
                        camera.position.set(0, -0.1, 4.2);
                        camera.lookAt(0, 0.1, 0);
                        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                        renderer.setSize(size, size);
                        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                        renderer.setClearColor(0x000000, 0);
                        renderer.shadowMap.enabled = true;
                        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
                        renderer.toneMapping = THREE.ACESFilmicToneMapping;
                        renderer.toneMappingExposure = 1.3;
                        renderer.outputColorSpace = THREE.SRGBColorSpace;
                        if (disposed || !mountRef.current)
                            return [2 /*return*/];
                        mount.appendChild(renderer.domElement);
                        // Éclairage
                        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
                        keyLight = new THREE.DirectionalLight(0xfff5e0, 3.5);
                        keyLight.position.set(-2, 3, 4);
                        keyLight.castShadow = true;
                        scene.add(keyLight);
                        fillTeal = new THREE.PointLight(0x00ffcc, 2.8, 10);
                        fillTeal.position.set(3, 0.5, 2);
                        scene.add(fillTeal);
                        rimViolet = new THREE.PointLight(0x9b5de5, 3.5, 8);
                        rimViolet.position.set(-3, 1, -2);
                        scene.add(rimViolet);
                        loader = new GLTFLoader();
                        headMesh = null;
                        loader.load('/mode.glb', function (gltf) {
                            if (disposed)
                                return;
                            var model = gltf.scene;
                            var box = new THREE.Box3().setFromObject(model);
                            var center = box.getCenter(new THREE.Vector3());
                            var sizeV = box.getSize(new THREE.Vector3());
                            var scale = 1.7 / Math.max(sizeV.x, sizeV.y, sizeV.z);
                            model.position.copy(center.multiplyScalar(-scale));
                            model.scale.setScalar(scale);
                            model.position.y += 0.05;
                            model.traverse(function (child) {
                                if (child.isMesh) {
                                    child.castShadow = true;
                                    child.receiveShadow = true;
                                }
                            });
                            scene.add(model);
                            headMesh = model;
                        });
                        targetRX = 0, targetRY = 0, currentRX = 0, currentRY = 0, autoAngle = 0;
                        onMouseMove = function (e) {
                            if (disposed)
                                return;
                            var nx = (e.clientX / window.innerWidth - 0.5) * 2;
                            var ny = (e.clientY / window.innerHeight - 0.5) * 2;
                            targetRY = nx * 0.4;
                            targetRX = -ny * 0.25;
                            fillTeal.position.x = 3 + nx * 2;
                            fillTeal.position.y = 0.5 - ny * 1.5;
                            rimViolet.position.x = -3 + nx * 1;
                        };
                        onTouchMove = function (e) {
                            if (disposed || !e.touches[0])
                                return;
                            var nx = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
                            var ny = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
                            targetRY = nx * 0.25;
                            targetRX = -ny * 0.15;
                            fillTeal.position.x = 3 + nx * 2;
                            fillTeal.position.y = 0.5 - ny * 1.5;
                            rimViolet.position.x = -3 + nx * 1;
                        };
                        window.addEventListener('mousemove', onMouseMove, { passive: true });
                        window.addEventListener('touchmove', onTouchMove, { passive: true });
                        animate = function () {
                            if (disposed)
                                return;
                            rafId = requestAnimationFrame(animate);
                            autoAngle += 0.004;
                            currentRX += (targetRX - currentRX) * 0.05;
                            currentRY += (targetRY - currentRY) * 0.05;
                            if (headMesh) {
                                headMesh.rotation.y = currentRY + Math.sin(autoAngle) * 0.05;
                                headMesh.rotation.x = currentRX + Math.cos(autoAngle * 0.7) * 0.012;
                                headMesh.position.y += (0.05 + Math.sin(autoAngle * 0.8) * 0.02 - headMesh.position.y) * 0.05;
                            }
                            renderer.render(scene, camera);
                        };
                        animate();
                        return [2 /*return*/, function () {
                                window.removeEventListener('mousemove', onMouseMove);
                                window.removeEventListener('touchmove', onTouchMove);
                            }];
                }
            });
        }); };
        var cleanupFn;
        init().then(function (fn) { cleanupFn = fn; });
        return function () {
            disposed = true;
            cancelAnimationFrame(rafId);
            cleanupFn === null || cleanupFn === void 0 ? void 0 : cleanupFn();
            if (renderer) {
                renderer.dispose();
                renderer.forceContextLoss();
            }
            while (mount.firstChild)
                mount.removeChild(mount.firstChild);
        };
    }, [size]);
    return (React.createElement("div", { ref: mountRef, style: {
            width: size,
            height: size,
            filter: 'drop-shadow(0 0 24px rgba(0,255,204,0.22)) drop-shadow(0 0 50px rgba(155,93,229,0.12))'
        } }));
}
exports["default"] = Face3D;
