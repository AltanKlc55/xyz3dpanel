"use strict";
(() => {
var exports = {};
exports.id = 8922;
exports.ids = [8922];
exports.modules = {

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tasarim_olustur)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: ./src/@core/styles/libs/react-datepicker/index.js
var react_datepicker = __webpack_require__(8745);
// EXTERNAL MODULE: ./src/views/form-layouts/FormLayoutsBasic.js
var FormLayoutsBasic = __webpack_require__(8234);
// EXTERNAL MODULE: ./src/views/form-layouts/FormLayoutsIcons.js
var FormLayoutsIcons = __webpack_require__(4122);
// EXTERNAL MODULE: ./src/views/form-layouts/FormLayoutsSeparator.js
var FormLayoutsSeparator = __webpack_require__(7632);
// EXTERNAL MODULE: ./src/views/form-layouts/FormLayoutsAlignment.js
var FormLayoutsAlignment = __webpack_require__(9816);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var dist_react_datepicker = __webpack_require__(5994);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/OutlinedInput"
var OutlinedInput_ = __webpack_require__(7730);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
// EXTERNAL MODULE: external "@mui/material/FormHelperText"
var FormHelperText_ = __webpack_require__(6354);
// EXTERNAL MODULE: external "mdi-material-ui/EyeOutline"
var EyeOutline_ = __webpack_require__(8961);
// EXTERNAL MODULE: external "mdi-material-ui/EyeOffOutline"
var EyeOffOutline_ = __webpack_require__(360);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
;// CONCATENATED MODULE: ./src/views/form-layouts/TasarimInnerForm.js









const TasarimInnerForm = ({ data , deleteItem , index  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                xs: 10,
                children: /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                    title: "\xd6zelleştir"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                xs: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: deleteItem,
                    children: "X"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        fullWidth: true,
                        type: "text",
                        label: "Başlık",
                        placeholder: "Başlık",
                        value: data.name,
                        size: "small"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        style: {
                            marginTop: 10
                        },
                        fullWidth: true,
                        type: "text",
                        label: "Veri T\xfcr\xfc",
                        placeholder: "Veri T\xfcr\xfc",
                        value: data.type,
                        size: "small"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const form_layouts_TasarimInnerForm = (TasarimInnerForm);

;// CONCATENATED MODULE: ./src/views/form-layouts/SayfaTasarimiOlustur.js
// ** React Imports


// ** MUI Imports





















const SayfaTasarimiOlustur = ()=>{
    const { 0: elements , 1: setElements  } = (0,external_react_.useState)();
    const { 0: random , 1: setRandomValue  } = (0,external_react_.useState)();
    const mockElements = [];
    const { 0: elementData , 1: setElementData  } = (0,external_react_.useState)(mockElements);
    const elementsHandler = (event)=>{
        console.log(event.target.value);
        setElements(event.target.value);
        const min = 1;
        const max = 100;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomValue(random);
    };
    const createHandler = ()=>{
        mockElements.push(...elementData, {
            name: "",
            type: elements,
            defaultValue: ""
        });
        setElementData(mockElements);
        console.log(mockElements);
    };
    const deleteItemHandler = (x)=>{
        const newElemetData = elementData.splice(x, 1);
        const newArray = elementData.filter((item)=>item !== newElemetData);
        setElementData(newArray);
        console.log(newArray);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Sayfa Tasarımı Oluştur",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: " Bu alandan sayfa i\xe7erisinde bulunacak olan yapıların elementleri eklenmektedir... "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        onSubmit: (e)=>e.preventDefault(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 5,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 10,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                htmlFor: "form-layouts-basic-password",
                                                children: "Element Se\xe7in"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                label: "Element Se\xe7in",
                                                placeholder: "Element Se\xe7in",
                                                onChange: elementsHandler,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "input",
                                                        children: "Input (Kısa Metinler İ\xe7in)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "select",
                                                        children: "Select (Kategorisel Se\xe7imler vb. İ\xe7in)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "textarea",
                                                        children: "TextArea (İ\xe7erik yazmak vb. işlemler i\xe7in)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: "image",
                                                        children: "G\xf6rsel Se\xe7im Aracı"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 2,
                                    style: {
                                        justifyContent: "center",
                                        alignItems: "center"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        onClick: createHandler,
                                        style: {
                                            alignSelf: "center",
                                            marginTop: 5
                                        },
                                        size: "large",
                                        variant: "contained",
                                        children: "Ekle"
                                    })
                                }),
                                elementData.map((x, i)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(form_layouts_TasarimInnerForm, {
                                            data: x,
                                            deleteItem: ()=>deleteItemHandler(i)
                                        })
                                    }, i);
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        sx: {
                                            gap: 5,
                                            display: "flex",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            type: "submit",
                                            variant: "contained",
                                            size: "large",
                                            children: "Kaydet"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const form_layouts_SayfaTasarimiOlustur = (SayfaTasarimiOlustur);

;// CONCATENATED MODULE: ./src/pages/tasarim_olustur/index.js
// ** MUI Imports


// ** Styled Component

// ** Demo Components Imports




// ** Third Party Styles Imports


const FormLayouts = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
            container: true,
            spacing: 6,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx(form_layouts_SayfaTasarimiOlustur, {})
            })
        })
    });
};
/* harmony default export */ const tasarim_olustur = (FormLayouts);


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

/***/ 8330:
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 6354:
/***/ ((module) => {

module.exports = require("@mui/material/FormHelperText");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

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

/***/ 754:
/***/ ((module) => {

module.exports = require("mdi-material-ui/EmailOutline");

/***/ }),

/***/ 360:
/***/ ((module) => {

module.exports = require("mdi-material-ui/EyeOffOutline");

/***/ }),

/***/ 8961:
/***/ ((module) => {

module.exports = require("mdi-material-ui/EyeOutline");

/***/ }),

/***/ 6384:
/***/ ((module) => {

module.exports = require("mdi-material-ui/MessageOutline");

/***/ }),

/***/ 82:
/***/ ((module) => {

module.exports = require("mdi-material-ui/Phone");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("react-datepicker");

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
var __webpack_exports__ = __webpack_require__.X(0, [8745,1200], () => (__webpack_exec__(1921)));
module.exports = __webpack_exports__;

})();