exports.id = 1200;
exports.ids = [1200];
exports.modules = {

/***/ 9816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8961);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(360);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18__);
// ** React Imports


// ** MUI Imports















// ** Icons Imports


// Styled component for the form
const Form = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)("form")(({ theme  })=>({
        maxWidth: 400,
        padding: theme.spacing(12),
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`
    }));
const FormLayoutsAlignment = ()=>{
    // ** State
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        password: "",
        showPassword: false
    });
    // Handle Password
    const handleChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowPassword = ()=>{
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    const handleMouseDownPassword = (event)=>{
        event.preventDefault();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8___default()), {
                title: "Form Alignment",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {
                sx: {
                    minHeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Form, {
                    onSubmit: (e)=>e.preventDefault(),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        container: true,
                        spacing: 5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    variant: "h5",
                                    children: "Sign In"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    fullWidth: true,
                                    label: "Username",
                                    placeholder: "carterLeonard"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            htmlFor: "form-layouts-alignment-password",
                                            children: "Password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            label: "Password",
                                            value: values.password,
                                            onChange: handleChange("password"),
                                            id: "form-layouts-alignment-password",
                                            type: values.showPassword ? "text" : "password",
                                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    edge: "end",
                                                    onClick: handleClickShowPassword,
                                                    onMouseDown: handleMouseDownPassword,
                                                    "aria-label": "toggle password visibility",
                                                    children: values.showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18___default()), {})
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_16___default()), {
                                    label: "Remember me",
                                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        name: "form-layouts-alignment-checkbox"
                                    }),
                                    sx: {
                                        "& .MuiButtonBase-root": {
                                            paddingTop: 0,
                                            paddingBottom: 0
                                        }
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    size: "large",
                                    type: "submit",
                                    variant: "contained",
                                    sx: {
                                        width: "100%"
                                    },
                                    children: "Login"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLayoutsAlignment);


/***/ }),

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6354);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8961);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(360);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18__);
// ** React Imports


// ** MUI Imports















// ** Icons Imports


const FormLayoutsBasic = ()=>{
    // ** States
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        password: "",
        showPassword: false
    });
    const { 0: confirmPassValues , 1: setConfirmPassValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        password: "",
        showPassword: false
    });
    const handleChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleConfirmPassChange = (prop)=>(event)=>{
            setConfirmPassValues({
                ...confirmPassValues,
                [prop]: event.target.value
            });
        };
    const handleClickShowPassword = ()=>{
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    const handleClickConfirmPassShow = ()=>{
        setConfirmPassValues({
            ...confirmPassValues,
            showPassword: !confirmPassValues.showPassword
        });
    };
    const handleMouseDownPassword = (event)=>{
        event.preventDefault();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8___default()), {
                title: "Basic",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: (e)=>e.preventDefault(),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                        container: true,
                        spacing: 5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    fullWidth: true,
                                    label: "Name",
                                    placeholder: "Leonard Carter"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    fullWidth: true,
                                    type: "email",
                                    label: "Email",
                                    placeholder: "carterleonard@gmail.com",
                                    helperText: "You can use letters, numbers & periods"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            htmlFor: "form-layouts-basic-password",
                                            children: "Password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            label: "Password",
                                            value: values.password,
                                            id: "form-layouts-basic-password",
                                            onChange: handleChange("password"),
                                            type: values.showPassword ? "text" : "password",
                                            "aria-describedby": "form-layouts-basic-password-helper",
                                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    edge: "end",
                                                    onClick: handleClickShowPassword,
                                                    onMouseDown: handleMouseDownPassword,
                                                    "aria-label": "toggle password visibility",
                                                    children: values.showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18___default()), {})
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            id: "form-layouts-basic-password-helper",
                                            children: "Use 8 or more characters with a mix of letters, numbers & symbols"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            htmlFor: "form-layouts-confirm-password",
                                            children: "Confirm Password"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            label: "Confirm Password",
                                            value: confirmPassValues.password,
                                            id: "form-layouts-confirm-password",
                                            onChange: handleConfirmPassChange("password"),
                                            "aria-describedby": "form-layouts-confirm-password-helper",
                                            type: confirmPassValues.showPassword ? "text" : "password",
                                            endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    edge: "end",
                                                    onClick: handleClickConfirmPassShow,
                                                    onMouseDown: handleMouseDownPassword,
                                                    "aria-label": "toggle password visibility",
                                                    children: confirmPassValues.showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_17___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_18___default()), {})
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            id: "form-layouts-confirm-password-helper",
                                            children: "Make sure to type the same password as above"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    sx: {
                                        gap: 5,
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            type: "submit",
                                            variant: "contained",
                                            size: "large",
                                            children: "Get Started!"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            sx: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                    sx: {
                                                        mr: 2
                                                    },
                                                    children: "Already have an account?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Log in"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLayoutsBasic);


/***/ }),

/***/ 4122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mdi_material_ui_Phone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82);
/* harmony import */ var mdi_material_ui_Phone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Phone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mdi_material_ui_EmailOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(754);
/* harmony import */ var mdi_material_ui_EmailOutline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EmailOutline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mdi_material_ui_AccountOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7143);
/* harmony import */ var mdi_material_ui_AccountOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_AccountOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mdi_material_ui_MessageOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6384);
/* harmony import */ var mdi_material_ui_MessageOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_MessageOutline__WEBPACK_IMPORTED_MODULE_11__);
// ** MUI Imports








// ** Icons Imports




const FormLayoutsIcons = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5___default()), {
                title: "Basic with Icons",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: (e)=>e.preventDefault(),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                        container: true,
                        spacing: 5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    fullWidth: true,
                                    label: "Full Name",
                                    placeholder: "Leonard Carter",
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            position: "start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_AccountOutline__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                        })
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    fullWidth: true,
                                    type: "email",
                                    label: "Email",
                                    placeholder: "carterleonard@gmail.com",
                                    helperText: "You can use letters, numbers & periods",
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            position: "start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EmailOutline__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                        })
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    fullWidth: true,
                                    type: "number",
                                    label: "Phone No.",
                                    placeholder: "+1-123-456-8790",
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            position: "start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_Phone__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                        })
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    fullWidth: true,
                                    multiline: true,
                                    minRows: 3,
                                    label: "Message",
                                    placeholder: "Bio...",
                                    sx: {
                                        "& .MuiOutlinedInput-root": {
                                            alignItems: "baseline"
                                        }
                                    },
                                    InputProps: {
                                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            position: "start",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_MessageOutline__WEBPACK_IMPORTED_MODULE_11___default()), {})
                                        })
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    type: "submit",
                                    variant: "contained",
                                    size: "large",
                                    children: "Submit"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLayoutsIcons);


/***/ }),

/***/ 7632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3691);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7730);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3103);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(983);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8961);
/* harmony import */ var mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(360);
/* harmony import */ var mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_20__);
// ** React Imports


// ** MUI Imports
















// ** Third Party Imports

// ** Icons Imports


const CustomInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
        fullWidth: true,
        ...props,
        inputRef: ref,
        label: "Birth Date",
        autoComplete: "off"
    });
});
const FormLayoutsSeparator = ()=>{
    // ** States
    const { 0: language , 1: setLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: date , 1: setDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        password: "",
        password2: "",
        showPassword: false,
        showPassword2: false
    });
    // Handle Password
    const handlePasswordChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowPassword = ()=>{
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    const handleMouseDownPassword = (event)=>{
        event.preventDefault();
    };
    // Handle Confirm Password
    const handleConfirmChange = (prop)=>(event)=>{
            setValues({
                ...values,
                [prop]: event.target.value
            });
        };
    const handleClickShowConfirmPassword = ()=>{
        setValues({
            ...values,
            showPassword2: !values.showPassword2
        });
    };
    const handleMouseDownConfirmPassword = (event)=>{
        event.preventDefault();
    };
    // Handle Select
    const handleSelectChange = (event)=>{
        setLanguage(event.target.value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_8___default()), {
                title: "Multi Column with Form Separator",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
                sx: {
                    margin: 0
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            container: true,
                            spacing: 5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        variant: "body2",
                                        sx: {
                                            fontWeight: 600
                                        },
                                        children: "1. Account Details"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        label: "Username",
                                        placeholder: "carterLeonard"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        type: "email",
                                        label: "Email",
                                        placeholder: "carterleonard@gmail.com"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                htmlFor: "form-layouts-separator-password",
                                                children: "Password"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                label: "Password",
                                                value: values.password,
                                                id: "form-layouts-separator-password",
                                                onChange: handlePasswordChange("password"),
                                                type: values.showPassword ? "text" : "password",
                                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                    position: "end",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        edge: "end",
                                                        onClick: handleClickShowPassword,
                                                        onMouseDown: handleMouseDownPassword,
                                                        "aria-label": "toggle password visibility",
                                                        children: values.showPassword ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_19___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_20___default()), {})
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                htmlFor: "form-layouts-separator-password-2",
                                                children: "Confirm Password"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                value: values.password2,
                                                label: "Confirm Password",
                                                id: "form-layouts-separator-password-2",
                                                onChange: handleConfirmChange("password2"),
                                                type: values.showPassword2 ? "text" : "password",
                                                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                    position: "end",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        edge: "end",
                                                        "aria-label": "toggle password visibility",
                                                        onClick: handleClickShowConfirmPassword,
                                                        onMouseDown: handleMouseDownConfirmPassword,
                                                        children: values.showPassword2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOutline__WEBPACK_IMPORTED_MODULE_19___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_EyeOffOutline__WEBPACK_IMPORTED_MODULE_20___default()), {})
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        sx: {
                                            marginBottom: 0
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        variant: "body2",
                                        sx: {
                                            fontWeight: 600
                                        },
                                        children: "2. Personal Info"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        label: "First Name",
                                        placeholder: "Leonard"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        label: "Last Name",
                                        placeholder: "Carter"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                id: "form-layouts-separator-select-label",
                                                children: "Country"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                label: "Country",
                                                defaultValue: "",
                                                id: "form-layouts-separator-select",
                                                labelId: "form-layouts-separator-select-label",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "UK",
                                                        children: "UK"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "USA",
                                                        children: "USA"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "Australia",
                                                        children: "Australia"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "Germany",
                                                        children: "Germany"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        fullWidth: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                id: "form-layouts-separator-multiple-select-label",
                                                children: "Language"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_17___default()), {
                                                multiple: true,
                                                value: language,
                                                onChange: handleSelectChange,
                                                id: "form-layouts-separator-multiple-select",
                                                labelId: "form-layouts-separator-multiple-select-label",
                                                input: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    label: "Language",
                                                    id: "select-multiple-language"
                                                }),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "English",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "French",
                                                        children: "French"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "Spanish",
                                                        children: "Spanish"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "Portuguese",
                                                        children: "Portuguese"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "Italian",
                                                        children: "Italian"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "German",
                                                        children: "German"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                        value: "Arabic",
                                                        children: "Arabic"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_18___default()), {
                                        selected: date,
                                        showYearDropdown: true,
                                        showMonthDropdown: true,
                                        placeholderText: "MM-DD-YYYY",
                                        customInput: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomInput, {}),
                                        id: "form-layouts-separator-date",
                                        onChange: (date)=>setDate(date)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        label: "Phone No.",
                                        placeholder: "+1-123-456-8790"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            margin: 0
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_13___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                size: "large",
                                type: "submit",
                                sx: {
                                    mr: 2
                                },
                                variant: "contained",
                                children: "Submit"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                size: "large",
                                color: "secondary",
                                variant: "outlined",
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLayoutsSeparator);


/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;