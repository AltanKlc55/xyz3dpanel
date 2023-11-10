"use strict";
(() => {
var exports = {};
exports.id = 8033;
exports.ids = [8033];
exports.modules = {

/***/ 6000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ iletisim)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Input"
var Input_ = __webpack_require__(1582);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "mdi-material-ui/TrendingUp"
var TrendingUp_ = __webpack_require__(9830);
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/views/form-layouts/İletisimForm.js














const IletisimForm = ({ data , dataRes  })=>{
    const { 0: editorLoaded , 1: setEditorLoaded  } = (0,external_react_.useState)(false);
    const { 0: selectedImage , 1: setSelectedImage  } = (0,external_react_.useState)("");
    const { 0: selectedBannerFile , 1: setSelectedBannerFile  } = (0,external_react_.useState)("");
    const { 0: file , 1: setFile  } = (0,external_react_.useState)("");
    const { 0: bannerfile , 1: setBannerFile  } = (0,external_react_.useState)("");
    const { 0: telefon , 1: setTelefon  } = (0,external_react_.useState)("");
    const { 0: telefonSirket , 1: setTelefonSirket  } = (0,external_react_.useState)("");
    const { 0: slogan , 1: setSlogan  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: adres , 1: setAdres  } = (0,external_react_.useState)("");
    const imagesOld = {};
    (0,external_react_.useEffect)(()=>{
        setSelectedImage("/uploads/" + data[0]?.iletisim_gorsel);
        setSelectedBannerFile("/uploads/" + data[0]?.banner);
        setTelefon(data[0]?.tel_no);
        setTelefonSirket(data[0]?.tel_no_sirket);
        setSlogan(data[0]?.slogan);
        setEmail(data[0]?.email);
        setAdres(data[0]?.adres);
    }, [
        data
    ]);
    (0,external_react_.useEffect)(()=>{
        setEditorLoaded(true);
    }, []);
    const telefonTxt = (event)=>{
        setTelefon(event.target.value);
    };
    const telefonSirketTxt = (event)=>{
        setTelefonSirket(event.target.value);
    };
    const sloganTxt = (event)=>{
        setSlogan(event.target.value);
    };
    const emailTxt = (event)=>{
        setEmail(event.target.value);
    };
    const adressTxt = (event)=>{
        setAdres(event.target.value);
    };
    const onSubmit = async ()=>{
        const formData = new FormData();
        console.log(file);
        if (file !== "") {
            try {
                formData.append("iletisimImg", file.name);
            } catch (error) {
                console.log(error);
            }
        } else {
            const txt = file.split("/");
            imagesOld["iletisimImg"] = txt[2];
        }
        if (bannerfile !== "") {
            try {
                formData.append("bannerImg", bannerfile.name);
            } catch (error1) {
                console.log(error1);
            }
        } else {
            const txt1 = selectedBannerFile.split("/");
            imagesOld["bannerImg"] = txt1[2];
        }
        const responseImg = await fetch("/api/newfileupload", {
            method: "POST",
            body: formData
        });
        const newimg = await responseImg.json();
        console.log(newimg);
        const postData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                telefon: telefon,
                telefonSirket: telefonSirket,
                slogan: slogan,
                email: email,
                adres: adres,
                banner: bannerfile.length === 0 ? selectedBannerFile.split("/")[2] : bannerfile.name,
                iletisimGorsel: file.length === 0 ? selectedImage.split("/")[2] : file.name
            })
        };
        const res = await fetch(`${"http://localhost:3000"}/api/iletisim`, postData);
        const response = await res.json();
        console.log(response);
        dataRes();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: "Sayfa İ\xe7erikleri",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: (e)=>e.preventDefault(),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 5,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                mt: 10,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    label: "Telefon Numarası",
                                    placeholder: "Telefon Numarası",
                                    value: telefon,
                                    onChange: telefonTxt
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                mt: 10,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    label: "Telefon Numarası (Şirket)",
                                    placeholder: "Telefon Numarası (Şirket)",
                                    value: telefonSirket,
                                    onChange: telefonSirketTxt
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                mt: 10,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    label: "Slogan",
                                    placeholder: "Slogan",
                                    value: slogan,
                                    onChange: sloganTxt
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                mt: 10,
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    label: "Email",
                                    placeholder: "Email",
                                    value: email,
                                    onChange: emailTxt
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                mt: 10,
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    fullWidth: true,
                                    label: "Adres",
                                    placeholder: "Adres",
                                    value: adres,
                                    onChange: adressTxt
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    mt: 10,
                                    variant: "h6",
                                    children: "Medya Alanı"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                style: {
                                    textAlign: "center"
                                },
                                item: true,
                                xs: 6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                        component: "label",
                                        variant: "contained",
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            "Banner G\xf6rseli Y\xfckle",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
                                                style: {
                                                    display: "none"
                                                },
                                                type: "file",
                                                onChange: (e)=>{
                                                    setBannerFile(e.target.files?.[0]);
                                                    setSelectedBannerFile(window.URL.createObjectURL(e.target.files?.[0]));
                                                }
                                            })
                                        ]
                                    }),
                                    selectedBannerFile !== "" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: selectedBannerFile,
                                        alt: "Picture of the author",
                                        width: 500,
                                        height: 500
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                style: {
                                    textAlign: "center"
                                },
                                item: true,
                                xs: 6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                        component: "label",
                                        variant: "contained",
                                        startIcon: /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            "İletişim G\xf6rseli Y\xfckle",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
                                                style: {
                                                    display: "none"
                                                },
                                                type: "file",
                                                onChange: (e)=>{
                                                    setFile(e.target.files?.[0]);
                                                    setSelectedImage(window.URL.createObjectURL(e.target.files?.[0]));
                                                }
                                            })
                                        ]
                                    }),
                                    selectedImage !== "" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: selectedImage,
                                        alt: "Picture of the author",
                                        width: 500,
                                        height: 500
                                    }) : ""
                                ]
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
                                        onClick: onSubmit,
                                        variant: "contained",
                                        size: "large",
                                        children: "Kaydet"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _letisimForm = (IletisimForm);

;// CONCATENATED MODULE: ./src/pages/iletisim/index.js







const MUITable = ()=>{
    const { 0: tableData , 1: setTableData  } = (0,external_react_.useState)([]);
    const { 0: rand , 1: setRand  } = (0,external_react_.useState)();
    const rastgeleSayiUret = ()=>{
        setRand(Math.floor(Math.random() * (100 - 300 + 1)) + 100);
    };
    const getDatas = async ()=>{
        const postData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const res = await fetch(`${"http://localhost:3000"}/api/iletisim`, postData);
        const response = await res.json();
        setTableData(response.hizmetler);
    };
    (0,external_react_.useEffect)(()=>{
        getDatas();
    }, [
        rand
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                xs: 12,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            children: "İletişim"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "İletişim Sayfasını D\xfczenleyin"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(_letisimForm, {
                        dataRes: rastgeleSayiUret,
                        data: tableData
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const iletisim = (MUITable);


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

/***/ 1582:
/***/ ((module) => {

module.exports = require("@mui/material/Input");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 9830:
/***/ ((module) => {

module.exports = require("mdi-material-ui/TrendingUp");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [3598,5675], () => (__webpack_exec__(6000)));
module.exports = __webpack_exports__;

})();