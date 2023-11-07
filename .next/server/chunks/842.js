"use strict";
exports.id = 842;
exports.ids = [842];
exports.modules = {

/***/ 842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1582);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9361);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9830);
/* harmony import */ var mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ckEditor_TextEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7990);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
















const HakkimizdaLayout = ({ dataAll , randData  })=>{
    const { 0: editorLoaded , 1: setEditorLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
    const { 0: selectedImage , 1: setSelectedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: selectedBannerFile , 1: setSelectedBannerFile  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: bannerfile , 1: setBannerFile  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: hakkimizdaFile , 1: setHakkimizdaFile  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: selectHakkimizdaFile , 1: setSelectHakkimizdaFile  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: sayfaBasligi , 1: setSayfaBasligi  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: nedenBizBasligi , 1: setNedenBizBasligi  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: nedenBizContent , 1: setNedenBizContent  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const { 0: hakkimizdaContent , 1: setHakkimizdaContent  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)("");
    const imagesOld = {};
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        setSelectedImage("/uploads/" + dataAll[0]?.neden_biz_gorsel);
        setSelectedBannerFile("/uploads/" + dataAll[0]?.banner);
        setSelectHakkimizdaFile("/uploads/" + dataAll[0]?.hakkimizda_gorsel);
        setNedenBizContent(dataAll[0]?.neden_biz_icerik);
        setHakkimizdaContent(dataAll[0]?.hakkimizda_icerik);
        setSayfaBasligi(dataAll[0]?.baslik);
        setNedenBizBasligi(dataAll[0]?.neden_biz_baslik);
    }, [
        dataAll
    ]);
    const handleChangeHakkimizda = (newContent)=>{
        setHakkimizdaContent(newContent);
    };
    const handleChangeNedenBiz = (newContent)=>{
        setNedenBizContent(newContent);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{
        setEditorLoaded(true);
    }, []);
    const baslikHandleChange = (event)=>{
        setSayfaBasligi(event.target.value);
    };
    const nedenBizHandleChange = (event)=>{
        setNedenBizBasligi(event.target.value);
    };
    const onSubmit = async ()=>{
        const formData = new FormData();
        if (file === "") {
            try {
                formData.append("nedenBiz", file);
            } catch (error) {
                console.log(error);
            }
        } else {
            const txt = file.split("/");
            imagesOld["nedenBiz"] = txt[2];
        }
        if (hakkimizdaFile === "") {
            try {
                formData.append("hakkimizdaImg", hakkimizdaFile);
            } catch (error1) {
                console.log(error1);
            }
        } else {
            const txts = selectHakkimizdaFile.split("/");
            imagesOld["hakkimizdaImg"] = txts[2];
        }
        if (bannerfile === "") {
            try {
                formData.append("bannerImg", bannerfile);
            } catch (error2) {
                console.log(error2);
            }
        } else {
            const txts1 = selectedBannerFile.split("/");
            imagesOld["bannerImg"] = txts1[2];
        }
        const responseImg = await fetch("/api/newfileupload", {
            method: "POST",
            body: formData
        });
        const newimg = await responseImg.json();
        const images = newimg.files;
        const banner = images.filter((item)=>item.fieldName === "bannerImg");
        const img = images.filter((item)=>item.fieldName === "hakkimizdaImg");
        const nedenbiz = images.filter((item)=>item.fieldName === "nedenBiz");
        console.log(img);
        const postData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nedenBizContent: nedenBizContent,
                hakkimizdaContent: hakkimizdaContent,
                nedenBizBasligi: nedenBizBasligi,
                sayfaBasligi: sayfaBasligi,
                banner: bannerfile.length === 0 ? selectedBannerFile.split("/")[2] : bannerfile.name,
                hakkimizda_gorsel: hakkimizdaFile.length === 0 ? selectHakkimizdaFile.split("/")[2] : hakkimizdaFile.name,
                neden_biz_gorsel: file.length === 0 ? selectedImage.split("/")[2] : file.name
            })
        };
        const res = await fetch(`${"http://testpanel.pixwaragerncy.com/"}/api/hakkimizda`, postData);
        const response = await res.json();
        console.log(response);
        randData();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7___default()), {
                title: "Sayfa İ\xe7erikleri",
                titleTypographyProps: {
                    variant: "h6"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: (e)=>e.preventDefault(),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                        container: true,
                        spacing: 5,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                mt: 10,
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    fullWidth: true,
                                    label: "Sayfa Başlığı",
                                    placeholder: "Sayfa Başlığı",
                                    value: sayfaBasligi,
                                    onChange: baslikHandleChange
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        variant: "h6",
                                        style: {
                                            paddingBottom: 10
                                        },
                                        children: " Hakkımızda İ\xe7eriği "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ckEditor_TextEditor__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        editorStatus: editorLoaded,
                                        contentsforupdate: dataAll[0]?.hakkimizda_icerik,
                                        onChange: handleChangeHakkimizda
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                mt: 10,
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    fullWidth: true,
                                    label: "Neden Biz Başlığı",
                                    placeholder: "Neden Biz Başlığı",
                                    value: nedenBizBasligi,
                                    onChange: nedenBizHandleChange
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        variant: "h6",
                                        style: {
                                            paddingBottom: 10
                                        },
                                        children: " Neden Biz ? İ\xe7eriği "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ckEditor_TextEditor__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        editorStatus: editorLoaded,
                                        contentsforupdate: dataAll[0]?.neden_biz_icerik,
                                        onChange: handleChangeNedenBiz
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    mt: 10,
                                    variant: "h6",
                                    children: "Medya Alanı"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                style: {
                                    textAlign: "center"
                                },
                                item: true,
                                xs: 4,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        component: "label",
                                        variant: "contained",
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            "Hakkımızda G\xf6rseli Y\xfckle",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                style: {
                                                    display: "none"
                                                },
                                                type: "file",
                                                onChange: (e)=>{
                                                    setHakkimizdaFile(e.target.files?.[0]);
                                                    setSelectHakkimizdaFile(window.URL.createObjectURL(e.target.files?.[0]));
                                                }
                                            })
                                        ]
                                    }),
                                    selectHakkimizdaFile !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        src: selectHakkimizdaFile,
                                        width: 500,
                                        height: 500
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                style: {
                                    textAlign: "center"
                                },
                                item: true,
                                xs: 4,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        component: "label",
                                        variant: "contained",
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            "Banner G\xf6rseli Y\xfckle",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_5___default()), {
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
                                    selectedBannerFile !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        src: selectedBannerFile,
                                        alt: "Picture of the author",
                                        width: 500,
                                        height: 500
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                style: {
                                    textAlign: "center"
                                },
                                item: true,
                                xs: 4,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        component: "label",
                                        variant: "contained",
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            "Neden Biz ? G\xf6rseli Y\xfckle",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_5___default()), {
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
                                    selectedImage !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        src: selectedImage,
                                        alt: "Picture of the author",
                                        width: 500,
                                        height: 500
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    sx: {
                                        gap: 5,
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HakkimizdaLayout);


/***/ })

};
;