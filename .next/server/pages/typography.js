"use strict";
(() => {
var exports = {};
exports.id = 3606;
exports.ids = [3606];
exports.modules = {

/***/ 5397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ typography)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
;// CONCATENATED MODULE: ./src/views/typography/TypographyTexts.js
// ** MUI Imports







const DemoGrid = (0,styles_.styled)((Grid_default()))(({ theme  })=>({
        [theme.breakpoints.down("sm")]: {
            paddingTop: `${theme.spacing(1)} !important`
        }
    }));
const TypographyTexts = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Texts",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 6,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "subtitle1"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "subtitle1",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 16px / line-height: 28px / font-weight: 400"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "subtitle2"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "subtitle2",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 14px / line-height: 21px / font-weight: 500"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "body1"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 16px / line-height: 24px / font-weight: 400"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "body2"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 14px / line-height: 21px / font-weight: 400"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "button"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "button",
                                    children: "Button Text"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        mt: 2
                                    },
                                    children: "font-size: 14px / line-height: 17px / font-weight: 500 / text-transform: uppercase"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "caption"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "caption",
                                    children: "Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        mt: 2
                                    },
                                    children: "font-size: 12px / line-height: 15px / font-weight: 400"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "overline"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "overline",
                                    children: "Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        mt: 1
                                    },
                                    children: "font-size: 12px / line-height: 15px / font-weight: 400 / text-transform: uppercase"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const typography_TypographyTexts = (TypographyTexts);

;// CONCATENATED MODULE: ./src/views/typography/TypographyHeadings.js
// ** MUI Imports







const TypographyHeadings_DemoGrid = (0,styles_.styled)((Grid_default()))(({ theme  })=>({
        [theme.breakpoints.down("sm")]: {
            paddingTop: `${theme.spacing(1)} !important`
        }
    }));
const TypographyHeadings = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Headings",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 6,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "H1"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TypographyHeadings_DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h1",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Heading 1"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 96px / line-height: 112px / font-weight: 500"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "H2"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TypographyHeadings_DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h2",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Heading 2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 60px / line-height: 72px / font-weight: 500"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "H3"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TypographyHeadings_DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h3",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Heading 3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 48px / line-height: 56px / font-weight: 500"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "H4"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TypographyHeadings_DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h4",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Heading 4"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 32px / line-height: 40px / font-weight: 500"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "H5"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TypographyHeadings_DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h5",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Heading 5"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 24px / line-height: 32px / font-weight: 500"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 2,
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                children: "H6"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TypographyHeadings_DemoGrid, {
                            item: true,
                            xs: 12,
                            sm: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Heading 6"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: "font-size: 20px / line-height: 32px / font-weight: 500"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const typography_TypographyHeadings = (TypographyHeadings);

;// CONCATENATED MODULE: ./src/pages/typography/index.js
// ** MUI Imports


// ** Demo Components Imports


const TypographyPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(typography_TypographyHeadings, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(typography_TypographyTexts, {})
            })
        ]
    });
};
/* harmony default export */ const typography = (TypographyPage);


/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 9361:
/***/ ((module) => {

module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5397));
module.exports = __webpack_exports__;

})();