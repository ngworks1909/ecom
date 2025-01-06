"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/register/route";
exports.ids = ["app/api/auth/register/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Nithin_OneDrive_Desktop_work_digital_marketplace_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/register/route.ts */ \"(rsc)/./app/api/auth/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/register/route\",\n        pathname: \"/api/auth/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/register/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Nithin\\\\OneDrive\\\\Desktop\\\\work\\\\digital-marketplace\\\\app\\\\api\\\\auth\\\\register\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Nithin_OneDrive_Desktop_work_digital_marketplace_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVnaXN0ZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNOaXRoaW4lNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUN3b3JrJTVDZGlnaXRhbC1tYXJrZXRwbGFjZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDTml0aGluJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDd29yayU1Q2RpZ2l0YWwtbWFya2V0cGxhY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21EO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8/ZjliNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxOaXRoaW5cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3b3JrXFxcXGRpZ2l0YWwtbWFya2V0cGxhY2VcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9yZWdpc3RlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9yZWdpc3Rlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXE5pdGhpblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdvcmtcXFxcZGlnaXRhbC1tYXJrZXRwbGFjZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxccmVnaXN0ZXJcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/register/route.ts":
/*!****************************************!*\
  !*** ./app/api/auth/register/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_api_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/api-error */ \"(rsc)/./lib/api-error.ts\");\n/* harmony import */ var _lib_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/validations */ \"(rsc)/./lib/validations.ts\");\n\n\n\n\n\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const result = _lib_validations__WEBPACK_IMPORTED_MODULE_4__.registerSchema.safeParse(body);\n        if (!result.success) {\n            throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_3__.ApiError(\"Invalid input\", 400, \"VALIDATION_ERROR\");\n        }\n        const { name, email, password } = result.data;\n        const existingUser = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser) {\n            throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_3__.ApiError(\"User already exists\", 400, \"USER_EXISTS\");\n        }\n        const hashedPassword = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.hashPassword)(password);\n        await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.user.create({\n            data: {\n                name,\n                email,\n                password: hashedPassword\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"User created successfully\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        return (0,_lib_api_error__WEBPACK_IMPORTED_MODULE_3__.handleApiError)(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ1Q7QUFDUTtBQUNpQjtBQUNSO0FBRTNDLGVBQWVNLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELFFBQVFFLElBQUk7UUFFL0IsTUFBTUMsU0FBU0wsNERBQWNBLENBQUNNLFNBQVMsQ0FBQ0g7UUFDeEMsSUFBSSxDQUFDRSxPQUFPRSxPQUFPLEVBQUU7WUFDbkIsTUFBTSxJQUFJVCxvREFBUUEsQ0FBQyxpQkFBaUIsS0FBSztRQUMzQztRQUVBLE1BQU0sRUFBRVUsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTCxPQUFPTSxJQUFJO1FBRTdDLE1BQU1DLGVBQWUsTUFBTWhCLDJDQUFNQSxDQUFDaUIsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDaERDLE9BQU87Z0JBQUVOO1lBQU07UUFDakI7UUFFQSxJQUFJRyxjQUFjO1lBQ2hCLE1BQU0sSUFBSWQsb0RBQVFBLENBQUMsdUJBQXVCLEtBQUs7UUFDakQ7UUFFQSxNQUFNa0IsaUJBQWlCLE1BQU1uQix1REFBWUEsQ0FBQ2E7UUFFMUMsTUFBTWQsMkNBQU1BLENBQUNpQixJQUFJLENBQUNJLE1BQU0sQ0FBQztZQUN2Qk4sTUFBTTtnQkFDSkg7Z0JBQ0FDO2dCQUNBQyxVQUFVTTtZQUNaO1FBQ0Y7UUFFQSxPQUFPckIscURBQVlBLENBQUNTLElBQUksQ0FDdEI7WUFBRWMsU0FBUztRQUE0QixHQUN2QztZQUFFQyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT3JCLDhEQUFjQSxDQUFDcUI7SUFDeEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvLi9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHM/NGE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL2RiJ1xuaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSAnQC9saWIvYXV0aCdcbmltcG9ydCB7IEFwaUVycm9yLCBoYW5kbGVBcGlFcnJvciB9IGZyb20gJ0AvbGliL2FwaS1lcnJvcidcbmltcG9ydCB7IHJlZ2lzdGVyU2NoZW1hIH0gZnJvbSAnQC9saWIvdmFsaWRhdGlvbnMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcblxuICAgIGNvbnN0IHJlc3VsdCA9IHJlZ2lzdGVyU2NoZW1hLnNhZmVQYXJzZShib2R5KVxuICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBBcGlFcnJvcignSW52YWxpZCBpbnB1dCcsIDQwMCwgJ1ZBTElEQVRJT05fRVJST1InKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXN1bHQuZGF0YVxuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBlbWFpbCB9LFxuICAgIH0pXG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ1VzZXIgYWxyZWFkeSBleGlzdHMnLCA0MDAsICdVU0VSX0VYSVNUUycpXG4gICAgfVxuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpXG5cbiAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiAnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gaGFuZGxlQXBpRXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImhhc2hQYXNzd29yZCIsIkFwaUVycm9yIiwiaGFuZGxlQXBpRXJyb3IiLCJyZWdpc3RlclNjaGVtYSIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXRhIiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiY3JlYXRlIiwibWVzc2FnZSIsInN0YXR1cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/api-error.ts":
/*!**************************!*\
  !*** ./lib/api-error.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiError: () => (/* binding */ ApiError),\n/* harmony export */   handleApiError: () => (/* binding */ handleApiError)\n/* harmony export */ });\nclass ApiError extends Error {\n    constructor(message, statusCode = 500, code){\n        super(message);\n        this.statusCode = statusCode;\n        this.code = code;\n        this.name = \"ApiError\";\n    }\n}\nfunction handleApiError(error) {\n    console.error(\"API Error:\", error);\n    if (error instanceof ApiError) {\n        return Response.json({\n            error: error.message,\n            code: error.code\n        }, {\n            status: error.statusCode\n        });\n    }\n    if (error instanceof Error) {\n        return Response.json({\n            error: \"Internal server error\",\n            message: error.message\n        }, {\n            status: 500\n        });\n    }\n    return Response.json({\n        error: \"Internal server error\"\n    }, {\n        status: 500\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXBpLWVycm9yLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsaUJBQWlCQztJQUM1QkMsWUFDRUMsT0FBZSxFQUNmLGFBQTRCLEdBQUcsRUFDL0IsSUFBb0IsQ0FDcEI7UUFDQSxLQUFLLENBQUNBO2FBSENDLGFBQUFBO2FBQ0FDLE9BQUFBO1FBR1AsSUFBSSxDQUFDQyxJQUFJLEdBQUc7SUFDZDtBQUNGO0FBRU8sU0FBU0MsZUFBZUMsS0FBYztJQUMzQ0MsUUFBUUQsS0FBSyxDQUFDLGNBQWNBO0lBRTVCLElBQUlBLGlCQUFpQlIsVUFBVTtRQUM3QixPQUFPVSxTQUFTQyxJQUFJLENBQ2xCO1lBQUVILE9BQU9BLE1BQU1MLE9BQU87WUFBRUUsTUFBTUcsTUFBTUgsSUFBSTtRQUFDLEdBQ3pDO1lBQUVPLFFBQVFKLE1BQU1KLFVBQVU7UUFBQztJQUUvQjtJQUVBLElBQUlJLGlCQUFpQlAsT0FBTztRQUMxQixPQUFPUyxTQUFTQyxJQUFJLENBQ2xCO1lBQUVILE9BQU87WUFBeUJMLFNBQVNLLE1BQU1MLE9BQU87UUFBQyxHQUN6RDtZQUFFUyxRQUFRO1FBQUk7SUFFbEI7SUFFQSxPQUFPRixTQUFTQyxJQUFJLENBQ2xCO1FBQUVILE9BQU87SUFBd0IsR0FDakM7UUFBRUksUUFBUTtJQUFJO0FBRWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL2xpYi9hcGktZXJyb3IudHM/YjVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgc3RhdHVzQ29kZTogbnVtYmVyID0gNTAwLFxuICAgIHB1YmxpYyBjb2RlPzogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgdGhpcy5uYW1lID0gJ0FwaUVycm9yJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBcGlFcnJvcihlcnJvcjogdW5rbm93bikge1xuICBjb25zb2xlLmVycm9yKCdBUEkgRXJyb3I6JywgZXJyb3IpXG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQXBpRXJyb3IpIHtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIGNvZGU6IGVycm9yLmNvZGUgfSxcbiAgICAgIHsgc3RhdHVzOiBlcnJvci5zdGF0dXNDb2RlIH1cbiAgICApXG4gIH1cblxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZXNwb25zZS5qc29uKFxuICAgIHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXG4gICAgeyBzdGF0dXM6IDUwMCB9XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIkFwaUVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJzdGF0dXNDb2RlIiwiY29kZSIsIm5hbWUiLCJoYW5kbGVBcGlFcnJvciIsImVycm9yIiwiY29uc29sZSIsIlJlc3BvbnNlIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/api-error.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePasswords: () => (/* binding */ comparePasswords),\n/* harmony export */   createToken: () => (/* binding */ createToken),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);\nasync function hashPassword(password) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);\n}\nasync function comparePasswords(password, hashedPassword) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, hashedPassword);\n}\nasync function createToken(userId, email) {\n    return new jose__WEBPACK_IMPORTED_MODULE_2__.SignJWT({\n        userId,\n        email\n    }).setProtectedHeader({\n        alg: \"HS256\"\n    }).setExpirationTime(\"24h\").sign(secretKey);\n}\nasync function verifyToken(token) {\n    try {\n        const verified = await (0,jose__WEBPACK_IMPORTED_MODULE_3__.jwtVerify)(token, secretKey);\n        return verified.payload;\n    } catch (err) {\n        return null;\n    }\n}\nasync function getSession() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"token\")?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFFVDtBQUU3QixNQUFNSSxZQUFZLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBRTlELGVBQWVDLGFBQWFDLFFBQWdCO0lBQ2pELE9BQU9SLG9EQUFXLENBQUNRLFVBQVU7QUFDL0I7QUFFTyxlQUFlRSxpQkFBaUJGLFFBQWdCLEVBQUVHLGNBQXNCO0lBQzdFLE9BQU9YLHVEQUFjLENBQUNRLFVBQVVHO0FBQ2xDO0FBRU8sZUFBZUUsWUFBWUMsTUFBYyxFQUFFQyxLQUFhO0lBQzdELE9BQU8sSUFBSWxCLHlDQUFPQSxDQUFDO1FBQUVpQjtRQUFRQztJQUFNLEdBQ2hDQyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO0lBQVEsR0FDbENDLGlCQUFpQixDQUFDLE9BQ2xCQyxJQUFJLENBQUNsQjtBQUNWO0FBRU8sZUFBZW1CLFlBQVlDLEtBQWE7SUFDN0MsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTXhCLCtDQUFTQSxDQUFDdUIsT0FBT3BCO1FBQ3hDLE9BQU9xQixTQUFTQyxPQUFPO0lBQ3pCLEVBQUUsT0FBT0MsS0FBSztRQUNaLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZUM7SUFDcEIsTUFBTUosUUFBUXRCLHFEQUFPQSxHQUFHMkIsR0FBRyxDQUFDLFVBQVVDO0lBQ3RDLElBQUksQ0FBQ04sT0FBTyxPQUFPO0lBQ25CLE9BQU9ELFlBQVlDO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSAnam9zZSdcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuY29uc3Qgc2VjcmV0S2V5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHByb2Nlc3MuZW52LkpXVF9TRUNSRVRfS0VZKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZHMocGFzc3dvcmQ6IHN0cmluZywgaGFzaGVkUGFzc3dvcmQ6IHN0cmluZykge1xuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9rZW4odXNlcklkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBTaWduSldUKHsgdXNlcklkLCBlbWFpbCB9KVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6ICdIUzI1NicgfSlcbiAgICAuc2V0RXhwaXJhdGlvblRpbWUoJzI0aCcpXG4gICAgLnNpZ24oc2VjcmV0S2V5KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW46IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHZlcmlmaWVkID0gYXdhaXQgand0VmVyaWZ5KHRva2VuLCBzZWNyZXRLZXkpXG4gICAgcmV0dXJuIHZlcmlmaWVkLnBheWxvYWRcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzKCkuZ2V0KCd0b2tlbicpPy52YWx1ZVxuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbFxuICByZXR1cm4gdmVyaWZ5VG9rZW4odG9rZW4pXG59XG5cbiJdLCJuYW1lcyI6WyJTaWduSldUIiwiand0VmVyaWZ5IiwiY29va2llcyIsImJjcnlwdCIsInNlY3JldEtleSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVRfS0VZIiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwiY29tcGFyZVBhc3N3b3JkcyIsImhhc2hlZFBhc3N3b3JkIiwiY29tcGFyZSIsImNyZWF0ZVRva2VuIiwidXNlcklkIiwiZW1haWwiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJ2ZXJpZnlUb2tlbiIsInRva2VuIiwidmVyaWZpZWQiLCJwYXlsb2FkIiwiZXJyIiwiZ2V0U2Vzc2lvbiIsImdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLGtCQUFrQkM7QUFJakIsTUFBTUMsU0FBU0YsZ0JBQWdCRSxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUU7QUFFbEUsSUFBSUksSUFBeUIsRUFBY0gsZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdjAtcHJvamVjdC8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWFcblxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/validations.ts":
/*!****************************!*\
  !*** ./lib/validations.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   itemSchema: () => (/* binding */ itemSchema),\n/* harmony export */   loginSchema: () => (/* binding */ loginSchema),\n/* harmony export */   registerSchema: () => (/* binding */ registerSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst registerSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(2, \"Name must be at least 2 characters\"),\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(\"Invalid email address\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6, \"Password must be at least 6 characters\")\n});\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(\"Invalid email address\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1, \"Password is required\")\n});\nconst itemSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(2, \"Name must be at least 2 characters\"),\n    description: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(10, \"Description must be at least 10 characters\"),\n    price: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().positive(\"Price must be positive\"),\n    resalePrice: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().positive(\"Resale price must be positive\"),\n    imageUrl: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(\"Invalid image URL\")\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvdmFsaWRhdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QjtBQUVoQixNQUFNQyxpQkFBaUJELGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDckNDLE1BQU1ILGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO0lBQ3hCQyxPQUFPTixrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHRSxLQUFLLENBQUM7SUFDeEJDLFVBQVVQLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO0FBQzlCLEdBQUU7QUFFSyxNQUFNRyxjQUFjUixrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ2xDSSxPQUFPTixrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHRSxLQUFLLENBQUM7SUFDeEJDLFVBQVVQLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO0FBQzlCLEdBQUU7QUFFSyxNQUFNSSxhQUFhVCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ2pDQyxNQUFNSCxrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztJQUN4QkssYUFBYVYsa0NBQUNBLENBQUNJLE1BQU0sR0FBR0MsR0FBRyxDQUFDLElBQUk7SUFDaENNLE9BQU9YLGtDQUFDQSxDQUFDWSxNQUFNLEdBQUdDLFFBQVEsQ0FBQztJQUMzQkMsYUFBYWQsa0NBQUNBLENBQUNZLE1BQU0sR0FBR0MsUUFBUSxDQUFDO0lBQ2pDRSxVQUFVZixrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHWSxHQUFHLENBQUM7QUFDM0IsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXYwLXByb2plY3QvLi9saWIvdmFsaWRhdGlvbnMudHM/MDAwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDIsICdOYW1lIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzJyksXG4gIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDYsICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycpLFxufSlcblxuZXhwb3J0IGNvbnN0IGxvZ2luU2NoZW1hID0gei5vYmplY3Qoe1xuICBlbWFpbDogei5zdHJpbmcoKS5lbWFpbCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyksXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbigxLCAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbn0pXG5cbmV4cG9ydCBjb25zdCBpdGVtU2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLm1pbigyLCAnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDIgY2hhcmFjdGVycycpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5taW4oMTAsICdEZXNjcmlwdGlvbiBtdXN0IGJlIGF0IGxlYXN0IDEwIGNoYXJhY3RlcnMnKSxcbiAgcHJpY2U6IHoubnVtYmVyKCkucG9zaXRpdmUoJ1ByaWNlIG11c3QgYmUgcG9zaXRpdmUnKSxcbiAgcmVzYWxlUHJpY2U6IHoubnVtYmVyKCkucG9zaXRpdmUoJ1Jlc2FsZSBwcmljZSBtdXN0IGJlIHBvc2l0aXZlJyksXG4gIGltYWdlVXJsOiB6LnN0cmluZygpLnVybCgnSW52YWxpZCBpbWFnZSBVUkwnKSxcbn0pXG5cbiJdLCJuYW1lcyI6WyJ6IiwicmVnaXN0ZXJTY2hlbWEiLCJvYmplY3QiLCJuYW1lIiwic3RyaW5nIiwibWluIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luU2NoZW1hIiwiaXRlbVNjaGVtYSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJudW1iZXIiLCJwb3NpdGl2ZSIsInJlc2FsZVByaWNlIiwiaW1hZ2VVcmwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/validations.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/jose","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CNithin%5COneDrive%5CDesktop%5Cwork%5Cdigital-marketplace&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();