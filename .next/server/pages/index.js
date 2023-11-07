"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 8293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/@core/styles/libs/react-apexcharts/index.js
// ** MUI imports

const ApexChartWrapper = (0,styles_.styled)("div")(({ theme  })=>({
        "& .apexcharts-canvas": {
            "& line[stroke='transparent']": {
                display: "none"
            },
            "& .apexcharts-xaxis > line, & .apexcharts-yaxis > line": {
                stroke: theme.palette.divider
            },
            "& .apexcharts-xaxis-tick, & .apexcharts-yaxis-tick": {
                stroke: theme.palette.divider
            },
            "& .apexcharts-tooltip": {
                boxShadow: theme.shadows[3],
                borderColor: theme.palette.divider,
                background: theme.palette.background.paper,
                "& .apexcharts-tooltip-title": {
                    fontWeight: 600,
                    borderColor: theme.palette.divider,
                    background: theme.palette.background.paper
                },
                "&.apexcharts-theme-dark": {
                    "& .apexcharts-tooltip-text-label, & .apexcharts-tooltip-text-value": {
                        color: theme.palette.common.white
                    }
                },
                "& .bar-chart": {
                    padding: theme.spacing(2, 2.5)
                }
            },
            "& .apexcharts-xaxistooltip": {
                borderColor: theme.palette.divider,
                background: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                "& .apexcharts-xaxistooltip-text": {
                    color: theme.palette.text.primary
                },
                "&:after": {
                    borderBottomColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default
                },
                "&:before": {
                    borderBottomColor: theme.palette.divider
                }
            },
            "& .apexcharts-yaxistooltip": {
                borderColor: theme.palette.divider,
                background: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                "& .apexcharts-yaxistooltip-text": {
                    color: theme.palette.text.primary
                },
                "&:after": {
                    borderLeftColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default
                },
                "&:before": {
                    borderLeftColor: theme.palette.divider
                }
            },
            "& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel": {
                filter: "none",
                fontWeight: 400,
                fill: theme.palette.text.primary,
                fontFamily: `${theme.typography.fontFamily} !important`
            },
            "& .apexcharts-pie-label": {
                filter: "none",
                fill: theme.palette.common.white
            },
            "& .apexcharts-pie": {
                "& .apexcharts-datalabel-label, .apexcharts-datalabel-value": {
                    fontSize: "1.5rem"
                }
            },
            "& .apexcharts-marker": {
                boxShadow: "none"
            },
            "& .apexcharts-legend-series": {
                margin: `${theme.spacing(0.75, 2)} !important`,
                "& .apexcharts-legend-text": {
                    marginLeft: theme.spacing(0.75),
                    color: `${theme.palette.text.primary} !important`
                }
            },
            "& .apexcharts-xcrosshairs, & .apexcharts-ycrosshairs, & .apexcharts-gridline": {
                stroke: theme.palette.divider
            },
            "& .apexcharts-heatmap-rect": {
                stroke: theme.palette.mode === "light" ? theme.palette.background.paper : theme.palette.background.default
            },
            "& .apexcharts-radialbar > g > g:first-of-type .apexcharts-radialbar-area": {
                stroke: theme.palette.background.default
            },
            "& .apexcharts-radar-series polygon": {
                stroke: theme.palette.divider,
                fill: theme.palette.background.paper
            },
            "& .apexcharts-radar-series line": {
                stroke: theme.palette.divider
            }
        }
    }));
/* harmony default export */ const react_apexcharts = (ApexChartWrapper);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
// EXTERNAL MODULE: external "mdi-material-ui/TrendingUp"
var TrendingUp_ = __webpack_require__(9830);
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);
// EXTERNAL MODULE: external "mdi-material-ui/CurrencyUsd"
var CurrencyUsd_ = __webpack_require__(5890);
var CurrencyUsd_default = /*#__PURE__*/__webpack_require__.n(CurrencyUsd_);
;// CONCATENATED MODULE: external "mdi-material-ui/DotsVertical"
const DotsVertical_namespaceObject = require("mdi-material-ui/DotsVertical");
var DotsVertical_default = /*#__PURE__*/__webpack_require__.n(DotsVertical_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/CellphoneLink"
const CellphoneLink_namespaceObject = require("mdi-material-ui/CellphoneLink");
var CellphoneLink_default = /*#__PURE__*/__webpack_require__.n(CellphoneLink_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/AccountOutline"
var AccountOutline_ = __webpack_require__(7143);
var AccountOutline_default = /*#__PURE__*/__webpack_require__.n(AccountOutline_);
;// CONCATENATED MODULE: ./src/views/dashboard/StatisticsCard.js
// ** MUI Imports









// ** Icons Imports





const salesData = [
    {
        stats: "245k",
        title: "Sales",
        color: "primary",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {
            sx: {
                fontSize: "1.75rem"
            }
        })
    },
    {
        stats: "12.5k",
        title: "Customers",
        color: "success",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((AccountOutline_default()), {
            sx: {
                fontSize: "1.75rem"
            }
        })
    },
    {
        stats: "1.54k",
        color: "warning",
        title: "Products",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((CellphoneLink_default()), {
            sx: {
                fontSize: "1.75rem"
            }
        })
    },
    {
        stats: "$88k",
        color: "info",
        title: "Revenue",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((CurrencyUsd_default()), {
            sx: {
                fontSize: "1.75rem"
            }
        })
    }
];
const renderStats = ()=>{
    return salesData.map((item, index)=>/*#__PURE__*/ _jsx(Grid, {
            item: true,
            xs: 12,
            sm: 3,
            children: /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ _jsx(Avatar, {
                        variant: "rounded",
                        sx: {
                            mr: 3,
                            width: 44,
                            height: 44,
                            boxShadow: 3,
                            color: "common.white",
                            backgroundColor: `${item.color}.main`
                        },
                        children: item.icon
                    }),
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "caption",
                                children: item.title
                            }),
                            /*#__PURE__*/ _jsx(Typography, {
                                variant: "h6",
                                children: item.stats
                            })
                        ]
                    })
                ]
            }, index)
        }, index));
};
const StatisticsCard = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
            title: "Selam...",
            action: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                size: "small",
                "aria-label": "settings",
                className: "card-more-options",
                sx: {
                    color: "text.secondary"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((DotsVertical_default()), {})
            }),
            subheader: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "body2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "span",
                        sx: {
                            fontWeight: 600,
                            color: "text.primary"
                        },
                        children: "Şuan Betadayız Fikirleriniz Ve \xd6nerileriniz İ\xe7in Geliştirici İle İletişime Ge\xe7iniz..."
                    }),
                    " ",
                    "\uD83D\uDE0E"
                ]
            }),
            titleTypographyProps: {
                sx: {
                    mb: 2.5,
                    lineHeight: "2rem !important",
                    letterSpacing: "0.15px !important"
                }
            }
        })
    });
};
/* harmony default export */ const dashboard_StatisticsCard = (StatisticsCard);

;// CONCATENATED MODULE: ./src/pages/index.js




const Dashboard = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_apexcharts, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 6,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(dashboard_StatisticsCard, {})
            })
        })
    });
};
/* harmony default export */ const pages = (Dashboard);


/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

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

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7143:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountOutline");

/***/ }),

/***/ 5890:
/***/ ((module) => {

module.exports = require("mdi-material-ui/CurrencyUsd");

/***/ }),

/***/ 9830:
/***/ ((module) => {

module.exports = require("mdi-material-ui/TrendingUp");

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
var __webpack_exports__ = (__webpack_exec__(8293));
module.exports = __webpack_exports__;

})();