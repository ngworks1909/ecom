"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/auth */ \"(middleware)/./lib/auth.ts\");\n\n\nasync function middleware(request) {\n    // Check for authentication token\n    const cookie = request.cookies.get(\"token\");\n    console.log();\n    const token = request.cookies.get(\"token\")?.value;\n    if (!token) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n    }\n    try {\n        const payload = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken)(token);\n        if (!payload) {\n            throw new Error(\"Invalid token\");\n        }\n        if (request.nextUrl.pathname === \"/\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/marketplace\", request.url));\n        }\n        // For admin routes, verify user role\n        if (request.nextUrl.pathname.startsWith(\"/admin\")) {\n            const res = await fetch(`${request.nextUrl.origin}/api/user/${payload.userId}`);\n            if (!res.ok) {\n                throw new Error(\"Failed to fetch user\");\n            }\n            const user = await res.json();\n            if (user.role !== \"ADMIN\") {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/marketplace\", request.url));\n            }\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    } catch (error) {\n        // Clear invalid token\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/login\", request.url));\n        response.cookies.delete(\"token\");\n        return response;\n    }\n}\nconst config = {\n    matcher: [\n        \"/admin/:path*\",\n        \"/marketplace/:path*\",\n        \"/profile/:path*\",\n        \"/api/admin/:path*\",\n        \"/api/marketplace/:path*\",\n        \"/api/profile/:path*\",\n        \"/\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRUY7QUFFakMsZUFBZUUsV0FBV0MsT0FBb0I7SUFDbkQsaUNBQWlDO0lBQ2pDLE1BQU1DLFNBQVNELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQ25DQyxRQUFRQyxHQUFHO0lBQ1gsTUFBTUMsUUFBUU4sUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUk7SUFFNUMsSUFBSSxDQUFDRCxPQUFPO1FBQ1YsT0FBT1QscURBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVULFFBQVFVLEdBQUc7SUFDNUQ7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNYixzREFBV0EsQ0FBQ1E7UUFDbEMsSUFBSSxDQUFDSyxTQUFTO1lBQ1osTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsSUFBSVosUUFBUWEsT0FBTyxDQUFDQyxRQUFRLEtBQUssS0FBSztZQUNwQyxPQUFPakIscURBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGdCQUFnQlQsUUFBUVUsR0FBRztRQUNsRTtRQUNBLHFDQUFxQztRQUNyQyxJQUFJVixRQUFRYSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7WUFDakQsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLENBQUMsRUFBRWpCLFFBQVFhLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDLFVBQVUsRUFBRVAsUUFBUVEsTUFBTSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDSCxJQUFJSSxFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJUixNQUFNO1lBQ2xCO1lBRUEsTUFBTVMsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO1lBQzNCLElBQUlELEtBQUtFLElBQUksS0FBSyxTQUFTO2dCQUN6QixPQUFPMUIscURBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGdCQUFnQlQsUUFBUVUsR0FBRztZQUNsRTtRQUNGO1FBRUEsT0FBT2IscURBQVlBLENBQUMyQixJQUFJO0lBQzFCLEVBQUUsT0FBT0MsT0FBTztRQUNkLHNCQUFzQjtRQUN0QixNQUFNQyxXQUFXN0IscURBQVlBLENBQUNXLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVULFFBQVFVLEdBQUc7UUFDcEVnQixTQUFTeEIsT0FBTyxDQUFDeUIsTUFBTSxDQUFDO1FBQ3hCLE9BQU9EO0lBQ1Q7QUFDRjtBQUVPLE1BQU1FLFNBQVM7SUFDcEJDLFNBQVM7UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0FBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gJy4vbGliL2F1dGgnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIC8vIENoZWNrIGZvciBhdXRoZW50aWNhdGlvbiB0b2tlblxuICBjb25zdCBjb29raWUgPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICBjb25zb2xlLmxvZygpXG4gIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWVcblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB2ZXJpZnlUb2tlbih0b2tlbilcbiAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0b2tlbicpXG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gJy8nKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9tYXJrZXRwbGFjZScsIHJlcXVlc3QudXJsKSk7XG4gICAgfVxuICAgIC8vIEZvciBhZG1pbiByb3V0ZXMsIHZlcmlmeSB1c2VyIHJvbGVcbiAgICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9hZG1pbicpKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtyZXF1ZXN0Lm5leHRVcmwub3JpZ2lufS9hcGkvdXNlci8ke3BheWxvYWQudXNlcklkfWApXG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyJylcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIGlmICh1c2VyLnJvbGUgIT09ICdBRE1JTicpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbWFya2V0cGxhY2UnLCByZXF1ZXN0LnVybCkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBDbGVhciBpbnZhbGlkIHRva2VuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxdWVzdC51cmwpKVxuICAgIHJlc3BvbnNlLmNvb2tpZXMuZGVsZXRlKCd0b2tlbicpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1xuICAgICcvYWRtaW4vOnBhdGgqJyxcbiAgICAnL21hcmtldHBsYWNlLzpwYXRoKicsXG4gICAgJy9wcm9maWxlLzpwYXRoKicsXG4gICAgJy9hcGkvYWRtaW4vOnBhdGgqJyxcbiAgICAnL2FwaS9tYXJrZXRwbGFjZS86cGF0aConLFxuICAgICcvYXBpL3Byb2ZpbGUvOnBhdGgqJyxcbiAgICAnLydcbiAgXVxufVxuXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwidmVyaWZ5VG9rZW4iLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImNvb2tpZSIsImNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ2YWx1ZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwicGF5bG9hZCIsIkVycm9yIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJlcyIsImZldGNoIiwib3JpZ2luIiwidXNlcklkIiwib2siLCJ1c2VyIiwianNvbiIsInJvbGUiLCJuZXh0IiwiZXJyb3IiLCJyZXNwb25zZSIsImRlbGV0ZSIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});