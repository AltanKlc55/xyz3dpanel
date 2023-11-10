"use strict";
(() => {
var exports = {};
exports.id = 8728;
exports.ids = [8728];
exports.modules = {

/***/ 7027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cards)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
;// CONCATENATED MODULE: external "@mui/material/CardMedia"
const CardMedia_namespaceObject = require("@mui/material/CardMedia");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
;// CONCATENATED MODULE: external "@mui/material/AvatarGroup"
const AvatarGroup_namespaceObject = require("@mui/material/AvatarGroup");
var AvatarGroup_default = /*#__PURE__*/__webpack_require__.n(AvatarGroup_namespaceObject);
;// CONCATENATED MODULE: ./src/views/cards/CardUser.js
// ** MUI Imports









const CardUser = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                sx: {
                    height: "12.625rem"
                },
                image: "/images/cards/background-user.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                alt: "Robert Meyer",
                src: "/images/avatars/1.png",
                sx: {
                    width: 75,
                    height: 75,
                    left: "1.313rem",
                    top: "10.28125rem",
                    position: "absolute",
                    border: (theme)=>`0.25rem solid ${theme.palette.common.white}`
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            mt: 5.75,
                            mb: 8.75,
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    mr: 2,
                                    mb: 1,
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        children: "Robert Meyer"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "caption",
                                        children: "London, UK"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "contained",
                                children: "Send Request"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            gap: 2,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle2",
                                sx: {
                                    whiteSpace: "nowrap",
                                    color: "text.primary"
                                },
                                children: "18 mutual friends"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AvatarGroup_default()), {
                                max: 4,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: "/images/avatars/8.png",
                                        alt: "Alice Cobb"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: "/images/avatars/7.png",
                                        alt: "Jeffery Warner"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: "/images/avatars/3.png",
                                        alt: "Howard Lloyd"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: "/images/avatars/2.png",
                                        alt: "Bettie Dunn"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: "/images/avatars/4.png",
                                        alt: "Olivia Sparks"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: "/images/avatars/5.png",
                                        alt: "Jimmy Hanson"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        src: "/images/avatars/6.png",
                                        alt: "Hallie Richards"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cards_CardUser = (CardUser);

;// CONCATENATED MODULE: ./src/views/cards/CardImgTop.js
// ** MUI Imports





const CardImgTop = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                sx: {
                    height: "14.5625rem"
                },
                image: "/images/cards/glass-house.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            marginBottom: 2
                        },
                        children: "Influencing The Influencer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cards_CardImgTop = (CardImgTop);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);
// EXTERNAL MODULE: external "mdi-material-ui/Twitter"
var Twitter_ = __webpack_require__(9808);
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);
;// CONCATENATED MODULE: external "mdi-material-ui/CartPlus"
const CartPlus_namespaceObject = require("mdi-material-ui/CartPlus");
var CartPlus_default = /*#__PURE__*/__webpack_require__.n(CartPlus_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/Facebook"
var Facebook_ = __webpack_require__(7207);
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);
;// CONCATENATED MODULE: external "mdi-material-ui/Linkedin"
const Linkedin_namespaceObject = require("mdi-material-ui/Linkedin");
var Linkedin_default = /*#__PURE__*/__webpack_require__.n(Linkedin_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/GooglePlus"
const GooglePlus_namespaceObject = require("mdi-material-ui/GooglePlus");
var GooglePlus_default = /*#__PURE__*/__webpack_require__.n(GooglePlus_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/ShareVariant"
const ShareVariant_namespaceObject = require("mdi-material-ui/ShareVariant");
var ShareVariant_default = /*#__PURE__*/__webpack_require__.n(ShareVariant_namespaceObject);
;// CONCATENATED MODULE: ./src/views/cards/CardMobile.js
// ** React Imports


// ** MUI Imports











// ** Icons Imports






// Styled Grid component
const StyledGrid = (0,styles_.styled)((Grid_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        [theme.breakpoints.up("md")]: {
            borderRight: `1px solid ${theme.palette.divider}`
        }
    }));
const CardMobile = ()=>{
    // ** State
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 6,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledGrid, {
                    item: true,
                    md: 5,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            width: 137,
                            height: 176,
                            alt: "Apple iPhone 11 Pro",
                            src: "/images/cards/iPhone-11-pro.png"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 7,
                    sx: {
                        paddingTop: [
                            "0 !important",
                            "0 !important",
                            "1.5rem !important"
                        ],
                        paddingLeft: [
                            "1.5rem !important",
                            "1.5rem !important",
                            "0 !important"
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Apple iPhone 11 Pro"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 3.5
                                    },
                                    children: "Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    sx: {
                                        fontWeight: 500,
                                        marginBottom: 3
                                    },
                                    children: [
                                        "Price:",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            component: "span",
                                            sx: {
                                                fontWeight: "bold"
                                            },
                                            children: "$899"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                            className: "card-action-dense",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((CartPlus_default()), {
                                                fontSize: "small",
                                                sx: {
                                                    marginRight: 2
                                                }
                                            }),
                                            "Add to Card"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                        id: "long-button",
                                        "aria-label": "share",
                                        "aria-haspopup": "true",
                                        onClick: handleClick,
                                        "aria-controls": "long-menu",
                                        "aria-expanded": open ? "true" : undefined,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ShareVariant_default()), {
                                            fontSize: "small"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                        open: open,
                                        id: "long-menu",
                                        anchorEl: anchorEl,
                                        onClose: handleClose,
                                        MenuListProps: {
                                            "aria-labelledby": "long-button"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: handleClose,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Facebook_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: handleClose,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Twitter_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: handleClose,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Linkedin_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                onClick: handleClose,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((GooglePlus_default()), {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardMobile = (CardMobile);

// EXTERNAL MODULE: external "mdi-material-ui/HelpCircleOutline"
var HelpCircleOutline_ = __webpack_require__(5442);
var HelpCircleOutline_default = /*#__PURE__*/__webpack_require__.n(HelpCircleOutline_);
;// CONCATENATED MODULE: ./src/views/cards/CardSupport.js
// ** MUI Imports






// ** Icons Imports

const CardSupport = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            sx: {
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: (theme)=>`${theme.spacing(9.75, 5, 9.25)} !important`
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                    sx: {
                        width: 50,
                        height: 50,
                        marginBottom: 2.25,
                        color: "common.white",
                        backgroundColor: "primary.main"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((HelpCircleOutline_default()), {
                        sx: {
                            fontSize: "2rem"
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    sx: {
                        marginBottom: 2.75
                    },
                    children: "Support"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    sx: {
                        marginBottom: 6
                    },
                    children: "According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    variant: "contained",
                    sx: {
                        padding: (theme)=>theme.spacing(1.75, 5.5)
                    },
                    children: "Contact Now"
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardSupport = (CardSupport);

;// CONCATENATED MODULE: external "mdi-material-ui/Heart"
const Heart_namespaceObject = require("mdi-material-ui/Heart");
var Heart_default = /*#__PURE__*/__webpack_require__.n(Heart_namespaceObject);
;// CONCATENATED MODULE: ./src/views/cards/CardTwitter.js
// ** MUI Imports






// ** Icons Imports



const CardTwitter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            border: 0,
            boxShadow: 0,
            color: "common.white",
            backgroundColor: "info.main"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            sx: {
                padding: (theme)=>`${theme.spacing(3.25, 5, 4.5)} !important`
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h6",
                    sx: {
                        display: "flex",
                        marginBottom: 2.75,
                        alignItems: "center",
                        color: "common.white"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Twitter_default()), {
                            sx: {
                                marginRight: 2.5
                            }
                        }),
                        "Twitter Card"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    sx: {
                        marginBottom: 3,
                        color: "common.white"
                    },
                    children: "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mr: 2,
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    alt: "Mary Vaughn",
                                    src: "/images/avatars/4.png",
                                    sx: {
                                        width: 34,
                                        height: 34,
                                        marginRight: 2.75
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        color: "common.white"
                                    },
                                    children: "Mary Vaughn"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        mr: 3.5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Heart_default()), {
                                            sx: {
                                                marginRight: 1.25
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "common.white"
                                            },
                                            children: "1.2k"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ShareVariant_default()), {
                                            sx: {
                                                marginRight: 1.25
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "common.white"
                                            },
                                            children: "80"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardTwitter = (CardTwitter);

;// CONCATENATED MODULE: ./src/views/cards/CardFacebook.js
// ** MUI Imports






// ** Icons Imports



const CardFacebook = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            border: 0,
            boxShadow: 0,
            color: "common.white",
            backgroundColor: "primary.main"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            sx: {
                padding: (theme)=>`${theme.spacing(3.25, 5, 4.5)} !important`
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h6",
                    sx: {
                        display: "flex",
                        marginBottom: 2.75,
                        alignItems: "center",
                        color: "common.white"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Facebook_default()), {
                            sx: {
                                marginRight: 2.5
                            }
                        }),
                        "Facebook Card"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    sx: {
                        marginBottom: 3,
                        color: "common.white"
                    },
                    children: "You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an effective."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mr: 2,
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    alt: "Eugene Clarke",
                                    src: "/images/avatars/1.png",
                                    sx: {
                                        width: 34,
                                        height: 34,
                                        marginRight: 2.75
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        color: "common.white"
                                    },
                                    children: "Eugene Clarke"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        mr: 3.5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Heart_default()), {
                                            sx: {
                                                marginRight: 1.25
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "common.white"
                                            },
                                            children: "3.2k"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ShareVariant_default()), {
                                            sx: {
                                                marginRight: 1.25
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "common.white"
                                            },
                                            children: "49"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardFacebook = (CardFacebook);

;// CONCATENATED MODULE: ./src/views/cards/CardLinkedIn.js
// ** MUI Imports






// ** Icons Imports



const CardLinkedIn = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        sx: {
            border: 0,
            boxShadow: 0,
            color: "common.white",
            backgroundColor: "success.main"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
            sx: {
                padding: (theme)=>`${theme.spacing(3.25, 5, 4.5)} !important`
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                    variant: "h6",
                    sx: {
                        display: "flex",
                        marginBottom: 2.75,
                        alignItems: "center",
                        color: "common.white"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Linkedin_default()), {
                            sx: {
                                marginRight: 2.5
                            }
                        }),
                        "LinkedIn Card"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "body2",
                    sx: {
                        marginBottom: 3,
                        color: "common.white"
                    },
                    children: "With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                mr: 2,
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                    alt: "Anne Burke",
                                    src: "/images/avatars/8.png",
                                    sx: {
                                        width: 34,
                                        height: 34,
                                        marginRight: 2.75
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        color: "common.white"
                                    },
                                    children: "Anne Burke"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        mr: 3.5
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Heart_default()), {
                                            sx: {
                                                marginRight: 1.25
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "common.white"
                                            },
                                            children: "1.1k"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ShareVariant_default()), {
                                            sx: {
                                                marginRight: 1.25
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            sx: {
                                                color: "common.white"
                                            },
                                            children: "67"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardLinkedIn = (CardLinkedIn);

;// CONCATENATED MODULE: ./src/views/cards/CardAppleWatch.js
// ** MUI Imports






const CardAppleWatch = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                sx: {
                    height: "9.375rem"
                },
                image: "/images/cards/watch-on-hand.jpg"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                sx: {
                    padding: (theme)=>`${theme.spacing(3, 5.25, 4)} !important`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            marginBottom: 2
                        },
                        children: "Apple Watch"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            marginBottom: 2
                        },
                        children: "$249.40"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                variant: "contained",
                sx: {
                    py: 2.5,
                    width: "100%",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0
                },
                children: "Add To Cart"
            })
        ]
    });
};
/* harmony default export */ const cards_CardAppleWatch = (CardAppleWatch);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "mdi-material-ui/TrendingUp"
var TrendingUp_ = __webpack_require__(9830);
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);
;// CONCATENATED MODULE: external "mdi-material-ui/StarOutline"
const StarOutline_namespaceObject = require("mdi-material-ui/StarOutline");
var StarOutline_default = /*#__PURE__*/__webpack_require__.n(StarOutline_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/AccountOutline"
var AccountOutline_ = __webpack_require__(7143);
var AccountOutline_default = /*#__PURE__*/__webpack_require__.n(AccountOutline_);
// EXTERNAL MODULE: external "mdi-material-ui/LockOpenOutline"
var LockOpenOutline_ = __webpack_require__(6996);
var LockOpenOutline_default = /*#__PURE__*/__webpack_require__.n(LockOpenOutline_);
;// CONCATENATED MODULE: ./src/views/cards/CardMembership.js
// ** MUI Imports









// ** Icons Imports




// Styled Box component
const StyledBox = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        [theme.breakpoints.up("sm")]: {
            borderRight: `1px solid ${theme.palette.divider}`
        }
    }));
const CardMembership = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 6,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    sm: 7,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                        sx: {
                            padding: (theme)=>`${theme.spacing(3.25, 5.75, 6.25)} !important`
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                sx: {
                                    marginBottom: 3.5
                                },
                                children: "Lifetime Membership"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                children: "Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                sx: {
                                    marginTop: 6.5,
                                    marginBottom: 6.75
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                container: true,
                                spacing: 4,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        sm: 5,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledBox, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        mb: 6.75,
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((LockOpenOutline_default()), {
                                                            sx: {
                                                                color: "primary.main",
                                                                marginRight: 2.75
                                                            },
                                                            fontSize: "small"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body2",
                                                            children: "Full Access"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((AccountOutline_default()), {
                                                            sx: {
                                                                color: "primary.main",
                                                                marginRight: 2.75
                                                            },
                                                            fontSize: "small"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body2",
                                                            children: "15 Members"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        sm: 7,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    mb: 6.75,
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((StarOutline_default()), {
                                                        sx: {
                                                            color: "primary.main",
                                                            marginRight: 2.75
                                                        },
                                                        fontSize: "small"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "Access all Features"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {
                                                        sx: {
                                                            color: "primary.main",
                                                            marginRight: 2.75
                                                        },
                                                        fontSize: "small"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body2",
                                                        children: "Lifetime Free Update"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    sm: 5,
                    xs: 12,
                    sx: {
                        paddingTop: [
                            "0 !important",
                            "1.5rem !important"
                        ],
                        paddingLeft: [
                            "1.5rem !important",
                            "0 !important"
                        ]
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                        sx: {
                            height: "100%",
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "action.hover",
                            padding: (theme)=>`${theme.spacing(18, 5, 16)} !important`
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 3.5,
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            children: "$"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            sx: {
                                                lineHeight: 1,
                                                fontWeight: 600,
                                                fontSize: "3.75rem !important"
                                            },
                                            children: "899"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h6",
                                            children: "USD"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        mb: 13.75,
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "5 Tips For Offshore"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Software Development"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    children: "Contact Now"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardMembership = (CardMembership);

// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
;// CONCATENATED MODULE: ./src/views/cards/CardInfluencer.js
// ** MUI Imports







const CardInfluencer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Influencing The Influencer"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            marginBottom: 3.25
                        },
                        children: "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "If you’re in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here’s a rundown of some of the best systems available."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                className: "card-action-dense",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    children: "Read More"
                })
            })
        ]
    });
};
/* harmony default export */ const cards_CardInfluencer = (CardInfluencer);

// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/lab/TabList"
var TabList_ = __webpack_require__(861);
var TabList_default = /*#__PURE__*/__webpack_require__.n(TabList_);
// EXTERNAL MODULE: external "@mui/lab/TabPanel"
var TabPanel_ = __webpack_require__(2071);
var TabPanel_default = /*#__PURE__*/__webpack_require__.n(TabPanel_);
// EXTERNAL MODULE: external "@mui/lab/TabContext"
var TabContext_ = __webpack_require__(6741);
var TabContext_default = /*#__PURE__*/__webpack_require__.n(TabContext_);
;// CONCATENATED MODULE: ./src/views/cards/CardNavigation.js
// ** React Imports


// ** MUI Imports








const CardNavigation = ()=>{
    // ** State
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("1");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContext_default()), {
            value: value,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabList_default()), {
                    onChange: handleChange,
                    "aria-label": "card navigation example",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            value: "1",
                            label: "Item One"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            value: "2",
                            label: "Item Two"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            value: "3",
                            label: "Item Three"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                            value: "1",
                            sx: {
                                p: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Header One"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 4
                                    },
                                    children: "Pudding tiramisu caramels. Gingerbread gummies danish chocolate bar toffee marzipan. Wafer wafer cake powder danish oat cake."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    children: "Button One"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                            value: "2",
                            sx: {
                                p: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Header Two"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 4
                                    },
                                    children: "Drag\xe9e chupa chups souffl\xe9 cheesecake jelly tootsie roll cupcake marzipan. Carrot cake sweet roll gummi bears caramels jelly beans."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    children: "Button Two"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                            value: "3",
                            sx: {
                                p: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Header Three"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 4
                                    },
                                    children: "Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert souffl\xe9 chocolate bar jujubes gummi bears lollipop."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    children: "Button Three"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardNavigation = (CardNavigation);

// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(5732);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "mdi-material-ui/ChevronUp"
var ChevronUp_ = __webpack_require__(7188);
var ChevronUp_default = /*#__PURE__*/__webpack_require__.n(ChevronUp_);
// EXTERNAL MODULE: external "mdi-material-ui/ChevronDown"
var ChevronDown_ = __webpack_require__(8867);
var ChevronDown_default = /*#__PURE__*/__webpack_require__.n(ChevronDown_);
;// CONCATENATED MODULE: ./src/views/cards/CardWithCollapse.js
// ** React Imports


// ** MUI Imports










// ** Icons Imports


const CardWithCollapse = ()=>{
    // ** State
    const { 0: collapse , 1: setCollapse  } = (0,external_react_.useState)(false);
    const handleClick = ()=>{
        setCollapse(!collapse);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                sx: {
                    height: "14.5625rem"
                },
                image: "/images/cards/paper-boat.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        sx: {
                            marginBottom: 2
                        },
                        children: "Popular Uses Of The Internet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "Although cards can support multiple actions, UI controls, and an overflow menu."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                className: "card-action-dense",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: handleClick,
                            children: "Details"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            size: "small",
                            onClick: handleClick,
                            children: collapse ? /*#__PURE__*/ jsx_runtime_.jsx((ChevronUp_default()), {
                                sx: {
                                    fontSize: "1.875rem"
                                }
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((ChevronDown_default()), {
                                sx: {
                                    fontSize: "1.875rem"
                                }
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Collapse_default()), {
                in: collapse,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        sx: {
                            margin: 0
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "body2",
                            children: "I′m a thing. But, like most politicians, he promised more than he could deliver. You won′t have time for sleeping, soldier, not with all the bed making you′ll be doing. Then we′ll go with that data file! Hey, you add a one and two zeros to that or we walk! You′re going to do his laundry? I′ve got to find a way to escape."
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cards_CardWithCollapse = (CardWithCollapse);

;// CONCATENATED MODULE: external "@mui/material/Rating"
const Rating_namespaceObject = require("@mui/material/Rating");
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating_namespaceObject);
;// CONCATENATED MODULE: ./src/views/cards/CardVerticalRatings.js
// ** MUI Imports









const CardVerticalRatings = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "The Best Answers"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            mb: 5,
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                                readOnly: true,
                                value: 5,
                                name: "read-only",
                                sx: {
                                    marginRight: 2
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "body2",
                                children: "5 Star | 98 reviews"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        sx: {
                            marginBottom: 3.25
                        },
                        children: "If you are looking for a new way to promote your business that won’t cost you more money, maybe printing is one of the options you won’t resist."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "Printing is a widely use process in making printed materials that are used for advertising. It become fast, easy and simple. If you want your promotional material to be an eye-catching."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                className: "card-action-dense",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        children: "Location"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        children: "Reviews"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const cards_CardVerticalRatings = (CardVerticalRatings);

;// CONCATENATED MODULE: ./src/views/cards/CardNavigationCenter.js
// ** React Imports


// ** MUI Imports








const CardNavigationCenter = ()=>{
    // ** State
    const { 0: value , 1: setValue  } = (0,external_react_.useState)("1");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabContext_default()), {
            value: value,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabList_default()), {
                    centered: true,
                    onChange: handleChange,
                    "aria-label": "card navigation example",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            value: "1",
                            label: "Item One"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            value: "2",
                            label: "Item Two"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            value: "3",
                            label: "Item Three"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                    sx: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                            value: "1",
                            sx: {
                                p: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Header One"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 4
                                    },
                                    children: "Pudding tiramisu caramels. Gingerbread gummies danish chocolate bar toffee marzipan. Wafer wafer cake powder danish oat cake."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    children: "Button One"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                            value: "2",
                            sx: {
                                p: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Header Two"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 4
                                    },
                                    children: "Drag\xe9e chupa chups souffl\xe9 cheesecake jelly tootsie roll cupcake marzipan. Carrot cake sweet roll gummi bears caramels jelly beans."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    children: "Button Two"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TabPanel_default()), {
                            value: "3",
                            sx: {
                                p: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Header Three"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 4
                                    },
                                    children: "Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert souffl\xe9 chocolate bar jujubes gummi bears lollipop."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    children: "Button Three"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardNavigationCenter = (CardNavigationCenter);

;// CONCATENATED MODULE: ./src/views/cards/CardHorizontalRatings.js
// ** MUI Imports










// Styled Grid component
const StyledGrid1 = (0,styles_.styled)((Grid_default()))(({ theme  })=>({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        [theme.breakpoints.down("md")]: {
            paddingTop: "0 !important"
        },
        "& .MuiCardContent-root": {
            padding: theme.spacing(3, 4.75),
            [theme.breakpoints.down("md")]: {
                paddingTop: 0
            }
        }
    }));
// Styled Grid component
const StyledGrid2 = (0,styles_.styled)((Grid_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up("md")]: {
            paddingLeft: "0 !important"
        },
        [theme.breakpoints.down("md")]: {
            order: -1
        }
    }));
// Styled component for the image
const Img = (0,styles_.styled)("img")(({ theme  })=>({
        height: "11rem",
        borderRadius: theme.shape.borderRadius
    }));
const CardHorizontalRatings = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 6,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledGrid1, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 7,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        marginBottom: 2
                                    },
                                    children: "Stumptown Roasters"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        mb: 4.75,
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                                            readOnly: true,
                                            value: 5,
                                            name: "read-only",
                                            sx: {
                                                marginRight: 2
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "body2",
                                            children: "5 Star | 98 reviews"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    sx: {
                                        marginBottom: 4
                                    },
                                    children: "Before there was a United States of America, there were coffee houses, because how are you supposed to build."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                            className: "card-action-dense",
                            sx: {
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    children: "Location"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    children: "Reviews"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(StyledGrid2, {
                    item: true,
                    xs: 12,
                    md: 6,
                    lg: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                            alt: "Stumptown Roasters",
                            src: "/images/cards/analog-clock.jpg"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const cards_CardHorizontalRatings = (CardHorizontalRatings);

;// CONCATENATED MODULE: ./src/pages/cards/index.js
// ** MUI Imports



// ** Demo Components Imports















const CardBasic = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sx: {
                    paddingBottom: 4
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    children: "Basic Cards"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardImgTop, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardUser, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardWithCollapse, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardMobile, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardHorizontalRatings, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardAppleWatch, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 8,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardMembership, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardInfluencer, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardVerticalRatings, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardSupport, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sx: {
                    pb: 4,
                    pt: (theme)=>`${theme.spacing(17.5)} !important`
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    children: "Navigation Cards"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardNavigation, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardNavigationCenter, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sx: {
                    pb: 4,
                    pt: (theme)=>`${theme.spacing(17.5)} !important`
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h5",
                    children: "Solid Cards"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardTwitter, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardFacebook, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx(cards_CardLinkedIn, {})
            })
        ]
    });
};
/* harmony default export */ const cards = (CardBasic);


/***/ }),

/***/ 6741:
/***/ ((module) => {

module.exports = require("@mui/lab/TabContext");

/***/ }),

/***/ 861:
/***/ ((module) => {

module.exports = require("@mui/lab/TabList");

/***/ }),

/***/ 2071:
/***/ ((module) => {

module.exports = require("@mui/lab/TabPanel");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 3691:
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 9361:
/***/ ((module) => {

module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

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

/***/ 8867:
/***/ ((module) => {

module.exports = require("mdi-material-ui/ChevronDown");

/***/ }),

/***/ 7188:
/***/ ((module) => {

module.exports = require("mdi-material-ui/ChevronUp");

/***/ }),

/***/ 7207:
/***/ ((module) => {

module.exports = require("mdi-material-ui/Facebook");

/***/ }),

/***/ 5442:
/***/ ((module) => {

module.exports = require("mdi-material-ui/HelpCircleOutline");

/***/ }),

/***/ 6996:
/***/ ((module) => {

module.exports = require("mdi-material-ui/LockOpenOutline");

/***/ }),

/***/ 9830:
/***/ ((module) => {

module.exports = require("mdi-material-ui/TrendingUp");

/***/ }),

/***/ 9808:
/***/ ((module) => {

module.exports = require("mdi-material-ui/Twitter");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(7027));
module.exports = __webpack_exports__;

})();