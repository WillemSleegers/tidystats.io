exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 7708:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4642))

/***/ }),

/***/ 8313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4458);
// EXTERNAL MODULE: ./src/components/Navbar.tsx
var Navbar = __webpack_require__(8675);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);
;// CONCATENATED MODULE: ./src/components/Footer.tsx

const data = [
    {
        id: "test",
        text: "R package",
        url: "/r-package/",
        items: [
            {
                id: "r-package-cran",
                text: "CRAN",
                url: "https://cran.r-project.org/web/packages/tidystats/"
            },
            {
                id: "r-package-documentation",
                text: "Documentation",
                url: "https://willemsleegers.github.io/tidystats/"
            },
            {
                id: "r-package-github",
                text: "GitHub",
                url: "https://github.com/WillemSleegers/tidystats/"
            },
            {
                id: "r-package-issues",
                text: "Bug report",
                url: "https://github.com/WillemSleegers/tidystats/issues/"
            }
        ]
    },
    {
        id: "word",
        text: "Microsoft Word",
        url: "/word-add-in/",
        items: [
            {
                id: "word-appsource",
                text: "AppSource",
                url: "https://appsource.microsoft.com/en-us/product/office/WA200002476?tab=Overview"
            },
            {
                id: "word-github",
                text: "GitHub",
                url: "https://github.com/WillemSleegers/tidystats-Word-add-in"
            },
            {
                id: "word-issues",
                text: "Bug report",
                url: "https://github.com/WillemSleegers/tidystats-Word-add-in/issues"
            }
        ]
    },
    {
        id: "google-docs",
        text: "Google Docs",
        url: "/google-docs-add-in/",
        items: [
            {
                id: "google-docs-statistic",
                text: "Google Docs Statistic",
                url: "/google-docs-statistic/"
            },
            {
                id: "google-docs-github",
                text: "GitHub",
                url: "https://github.com/gasparl/tidystats-Google-Docs-add-in"
            },
            {
                id: "google-docs-issues",
                text: "Bug report",
                url: "https://github.com/gasparl/tidystats-Google-Docs-add-in/issues"
            }
        ]
    },
    {
        id: "support",
        text: "Support",
        url: "/support/",
        items: [
            {
                id: "support-faq",
                text: "FAQ",
                url: "/FAQ/"
            },
            {
                id: "support-tips",
                text: "Tips",
                url: "/tips/"
            },
            {
                id: "support-twitter",
                text: "Twitter",
                url: "https://twitter.com/tidystats"
            },
            {
                id: "support-email",
                text: "E-mail",
                url: "mailto:tidystats@gmail.com"
            }
        ]
    },
    {
        id: "about",
        text: "About",
        url: "/about/",
        items: [
            {
                id: "about-me",
                text: "Me",
                url: "/me/"
            },
            {
                id: "about-citation",
                text: "Citation",
                url: "/citation/"
            },
            {
                id: "about-privacy",
                text: "Privacy",
                url: "/privacy/"
            }
        ]
    }
];
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "text-center mt-auto pt-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("small", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "inline-block",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-wrap gap-4 gap-md-5 text-start",
                        children: data.map((item)=>{
                            console.log(item.id);
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "{{ item.url }}",
                                            className: "text-decoration-none text-dark",
                                            children: item.text
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: "list-unstyled",
                                        children: item.items.map((subitem)=>{
                                            return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    className: "text-muted text-decoration-none",
                                                    href: subitem.url,
                                                    children: subitem.text
                                                })
                                            }, item.id);
                                        })
                                    })
                                ]
                            }, item.id);
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "text-center text-muted my-4",
                    children: "Willem Sleegers \xa9 2023"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "tidystats",
    description: "The website of tidystats: A software tool to reproducibly report statistics."
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Navbar_default()), {}),
                children,
                /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 8675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/Users/willem/GitHub/tidystats.io/src/components/Navbar.tsx");


/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Navbar = ()=>{
    const [hidden, setHidden] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handleClick = ()=>{
        setHidden(!hidden);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "bg-white border-gray-200 dark:bg-gray-900",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "/",
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/assets/images/tidystats-logo.svg",
                            width: 32,
                            height: 32,
                            className: "mr-3",
                            alt: "tidystats Logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white",
                            children: "tidystats"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: handleClick,
                    "data-collapse-toggle": "navbar-default",
                    type: "button",
                    className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-default",
                    "aria-expanded": "false",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "w-6 h-6",
                            "aria-hidden": "true",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `w-full md:block md:w-auto ${hidden ? "hidden" : ""}`,
                    id: "navbar-default",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/",
                                    className: "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500",
                                    "aria-current": "page",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/about",
                                    className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "Services"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "Pricing"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    className: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;