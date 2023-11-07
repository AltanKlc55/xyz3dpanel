"use strict";
exports.id = 4444;
exports.ids = [4444];
exports.modules = {

/***/ 6293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1582);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9830);
/* harmony import */ var mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ckEditor_TextEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7990);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);














const SektorlerDuzenleForm = ({ dataUpdates , closeModal , reDatas  })=>{
    const { 0: editorLoaded , 1: setEditorLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const { 0: selectedBannerFile , 1: setSelectedBannerFile  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("/uploads/" + dataUpdates.banner);
    const { 0: uploading , 1: setUploading  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const { 0: bannerfile , 1: setBannerFile  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("/uploads/" + dataUpdates.banner);
    const { 0: hakkimizdaFile , 1: setHakkimizdaFile  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("/uploads/" + dataUpdates.img);
    const { 0: selectHakkimizdaFile , 1: setSelectHakkimizdaFile  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)("/uploads/" + dataUpdates.img);
    const { 0: sayfaBasligi , 1: setSayfaBasligi  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(dataUpdates.name);
    const { 0: hakkimizdaContent , 1: setHakkimizdaContent  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(dataUpdates.content);
    const imagesOld = {};
    const handleChangeHakkimizda = (newContent)=>{
        setHakkimizdaContent(newContent);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        setEditorLoaded(true);
    }, []);
    const baslikHandleChange = (event)=>{
        setSayfaBasligi(event.target.value);
    };
    const onSubmit = async ()=>{
        setUploading(true);
        const formData = new FormData();
        if (bannerfile !== dataUpdates.banner || dataUpdates.banner === "") {
            try {
                formData.append("bannerImg", bannerfile);
            } catch (error) {
                console.log(error);
            }
        } else {
            const txt = selectedBannerFile.split("/");
            imagesOld["bannerImg"] = txt[2];
        }
        if (hakkimizdaFile !== dataUpdates.img || dataUpdates.img === "") {
            try {
                if (!hakkimizdaFile) return;
                formData.append("hizmetImg", hakkimizdaFile);
            } catch (error1) {
                console.log(error1);
            }
        } else {
            const txts = selectHakkimizdaFile.split("/");
            imagesOld["hizmetImg"] = txts[2];
        }
        const responseImg = await fetch("/api/newfileupload", {
            method: "POST",
            body: formData
        });
        const newimg = await responseImg.json();
        const images = newimg.files;
        const banner = images.filter((item)=>item.fieldName === "bannerImg");
        const img = images.filter((item)=>item.fieldName === "hizmetImg");
        const postData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: dataUpdates.id,
                sektorIcerigi: hakkimizdaContent,
                sektorBasligi: sayfaBasligi,
                banner: banner.length === 0 ? selectedBannerFile.split("/")[2] : banner[0].name,
                img: img.length === 0 ? selectHakkimizdaFile.split("/")[2] : img[0].name
            })
        };
        const res = await fetch(`${"http://testpanel.pixwaragerncy.com/"}/api/sektorler`, postData);
        const response = await res.json();
        console.log(response);
        reDatas();
        closeModal();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7___default()), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: (e)=>e.preventDefault(),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                            mt: 3,
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                                fullWidth: true,
                                label: "Sekt\xf6r Başlığı",
                                placeholder: "Sekt\xf6r Başlığı",
                                value: sayfaBasligi,
                                onChange: baslikHandleChange
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                            item: true,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    variant: "h6",
                                    style: {
                                        paddingBottom: 10
                                    },
                                    children: " Hizmet İ\xe7eriği "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ckEditor_TextEditor__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    editorStatus: editorLoaded,
                                    contentsforupdate: dataUpdates.content,
                                    onChange: handleChangeHakkimizda
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                mt: 10,
                                variant: "h6",
                                children: "Medya Alanı"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                            style: {
                                textAlign: "center"
                            },
                            item: true,
                            xs: 6,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    component: "label",
                                    variant: "contained",
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                    style: {
                                        marginBottom: 20
                                    },
                                    children: [
                                        "Hizmet G\xf6rseli Y\xfckle",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                selectHakkimizdaFile !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    src: selectHakkimizdaFile,
                                    width: 500,
                                    height: 500
                                }) : ""
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                            style: {
                                textAlign: "center"
                            },
                            item: true,
                            xs: 6,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    component: "label",
                                    variant: "contained",
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((mdi_material_ui_TrendingUp__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                    style: {
                                        marginBottom: 20
                                    },
                                    children: [
                                        "Banner G\xf6rseli Y\xfckle",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                selectedBannerFile !== "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    src: selectedBannerFile,
                                    alt: "Picture of the author",
                                    width: 500,
                                    height: 500
                                }) : ""
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                            style: {
                                textAlign: "center"
                            },
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                type: "submit",
                                onClick: onSubmit,
                                variant: "contained",
                                size: "large",
                                children: "Kaydet"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SektorlerDuzenleForm);


/***/ }),

/***/ 5259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7308);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);











const TableStickyHeaderSektorler = ({ data , handleClickFunc , openDuzenleModal  })=>{
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: rowsPerPage , 1: setRowsPerPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2___default()), {
        sx: {
            width: "100%",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default()), {
                sx: {
                    maxHeight: 440
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_3___default()), {
                    stickyHeader: true,
                    "aria-label": "sticky table",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5___default()), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        align: "center",
                                        style: {
                                            width: 50
                                        },
                                        children: "ID"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        align: "center",
                                        style: {
                                            width: 50
                                        },
                                        children: "Başlık"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        align: "center",
                                        style: {
                                            width: 150
                                        },
                                        children: "Banner"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        align: "center",
                                        style: {
                                            width: 150
                                        },
                                        children: "Sekt\xf6r G\xf6rseli"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        align: "center",
                                        style: {
                                            width: 150
                                        },
                                        children: "Oluşturulma Tarihi"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        align: "center",
                                        style: {
                                            width: 300
                                        },
                                        children: "İşlem"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: data.map((column, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    hover: true,
                                    role: "checkbox",
                                    tabIndex: -1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: column.id
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: column.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: column.banner
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: column.img
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: column.date_time
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            style: {
                                                width: 300,
                                                textAlign: "center"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    flexDirection: "row"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                                        style: {
                                                            color: "white",
                                                            width: 85,
                                                            margin: 5
                                                        },
                                                        variant: "contained",
                                                        onClick: ()=>openDuzenleModal(column.id, column),
                                                        children: "D\xfczenle"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Button, {
                                                        style: {
                                                            color: "white",
                                                            width: 50,
                                                            backgroundColor: "red"
                                                        },
                                                        variant: "contained",
                                                        onClick: ()=>handleClickFunc(column.id),
                                                        children: "Sil"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, index);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_9___default()), {
                rowsPerPageOptions: [
                    10,
                    25,
                    100
                ],
                component: "div",
                count: data.length,
                rowsPerPage: rowsPerPage,
                page: page,
                onPageChange: handleChangePage,
                onRowsPerPageChange: handleChangeRowsPerPage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableStickyHeaderSektorler);


/***/ })

};
;