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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n// export async function middleware(request: NextRequest) {\n//   // Check for authentication token\n//   const token = request.cookies.get('token')?.value\n//   if (!token) {\n//     return NextResponse.redirect(new URL('/login', request.url))\n//   }\n//   try {\n//     const payload = await verifyToken(token)\n//     if (!payload) {\n//       throw new Error('Invalid token')\n//     }\n// if (request.nextUrl.pathname === '/') {\n//   return NextResponse.redirect(new URL('/marketplace', request.url));\n// }\n//     // For admin routes, verify user role\n//     if (request.nextUrl.pathname.startsWith('/admin')) {\n//       const res = await fetch(`${request.nextUrl.origin}/api/user/${payload.userId}`)\n//       if (!res.ok) {\n//         throw new Error('Failed to fetch user')\n//       }\n//       const user = await res.json()\n//       if (user.role !== 'ADMIN') {\n//         return NextResponse.redirect(new URL('/marketplace', request.url))\n//       }\n//     }\n//     return NextResponse.next()\n//   } catch (error) {\n//     // Clear invalid token\n//     const response = NextResponse.redirect(new URL('/login', request.url))\n//     response.cookies.delete('token')\n//     return response\n//   }\n// }\nasync function middleware(req) {\n    if (req.nextUrl.pathname === \"/\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/marketplace\", req.url));\n    }\n}\nconst config = {\n    matcher: [\n        \"/admin/:path*\",\n        \"/marketplace/:path*\",\n        \"/profile/:path*\",\n        \"/api/admin/:path*\",\n        \"/api/marketplace/:path*\",\n        \"/api/profile/:path*\",\n        \"/\",\n        \"/marketplace\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFJMUMsMkRBQTJEO0FBQzNELHNDQUFzQztBQUN0QyxzREFBc0Q7QUFFdEQsa0JBQWtCO0FBQ2xCLG1FQUFtRTtBQUNuRSxNQUFNO0FBRU4sVUFBVTtBQUNWLCtDQUErQztBQUMvQyxzQkFBc0I7QUFDdEIseUNBQXlDO0FBQ3pDLFFBQVE7QUFFSiwwQ0FBMEM7QUFDMUMsd0VBQXdFO0FBQ3hFLElBQUk7QUFDUiw0Q0FBNEM7QUFDNUMsMkRBQTJEO0FBQzNELHdGQUF3RjtBQUN4Rix1QkFBdUI7QUFDdkIsa0RBQWtEO0FBQ2xELFVBQVU7QUFFVixzQ0FBc0M7QUFDdEMscUNBQXFDO0FBQ3JDLDZFQUE2RTtBQUM3RSxVQUFVO0FBQ1YsUUFBUTtBQUVSLGlDQUFpQztBQUNqQyxzQkFBc0I7QUFDdEIsNkJBQTZCO0FBQzdCLDZFQUE2RTtBQUM3RSx1Q0FBdUM7QUFDdkMsc0JBQXNCO0FBQ3RCLE1BQU07QUFDTixJQUFJO0FBRUcsZUFBZUMsV0FBV0MsR0FBZ0I7SUFDL0MsSUFBSUEsSUFBSUMsT0FBTyxDQUFDQyxRQUFRLEtBQUssS0FBSztRQUNoQyxPQUFPSixxREFBWUEsQ0FBQ0ssUUFBUSxDQUFDLElBQUlDLElBQUksZ0JBQWdCSixJQUFJSyxHQUFHO0lBQzlEO0FBQ0Y7QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUVEO0FBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gJy4vbGliL2F1dGgnXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4vLyAgIC8vIENoZWNrIGZvciBhdXRoZW50aWNhdGlvbiB0b2tlblxuLy8gICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Rva2VuJyk/LnZhbHVlXG5cbi8vICAgaWYgKCF0b2tlbikge1xuLy8gICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxdWVzdC51cmwpKVxuLy8gICB9XG5cbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgdmVyaWZ5VG9rZW4odG9rZW4pXG4vLyAgICAgaWYgKCFwYXlsb2FkKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdG9rZW4nKVxuLy8gICAgIH1cblxuICAgIC8vIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUgPT09ICcvJykge1xuICAgIC8vICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbWFya2V0cGxhY2UnLCByZXF1ZXN0LnVybCkpO1xuICAgIC8vIH1cbi8vICAgICAvLyBGb3IgYWRtaW4gcm91dGVzLCB2ZXJpZnkgdXNlciByb2xlXG4vLyAgICAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvYWRtaW4nKSkge1xuLy8gICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cmVxdWVzdC5uZXh0VXJsLm9yaWdpbn0vYXBpL3VzZXIvJHtwYXlsb2FkLnVzZXJJZH1gKVxuLy8gICAgICAgaWYgKCFyZXMub2spIHtcbi8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlcicpXG4vLyAgICAgICB9XG5cbi8vICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpXG4vLyAgICAgICBpZiAodXNlci5yb2xlICE9PSAnQURNSU4nKSB7XG4vLyAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL21hcmtldHBsYWNlJywgcmVxdWVzdC51cmwpKVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgLy8gQ2xlYXIgaW52YWxpZCB0b2tlblxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QudXJsKSlcbi8vICAgICByZXNwb25zZS5jb29raWVzLmRlbGV0ZSgndG9rZW4nKVxuLy8gICAgIHJldHVybiByZXNwb25zZVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3Qpe1xuICBpZiAocmVxLm5leHRVcmwucGF0aG5hbWUgPT09ICcvJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL21hcmtldHBsYWNlJywgcmVxLnVybCkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcbiAgICAnL2FkbWluLzpwYXRoKicsXG4gICAgJy9tYXJrZXRwbGFjZS86cGF0aConLFxuICAgICcvcHJvZmlsZS86cGF0aConLFxuICAgICcvYXBpL2FkbWluLzpwYXRoKicsXG4gICAgJy9hcGkvbWFya2V0cGxhY2UvOnBhdGgqJyxcbiAgICAnL2FwaS9wcm9maWxlLzpwYXRoKicsXG4gICAgJy8nLFxuICAgICcvbWFya2V0cGxhY2UnXG4gIFxuICBdXG59XG5cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwibmV4dFVybCIsInBhdGhuYW1lIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});