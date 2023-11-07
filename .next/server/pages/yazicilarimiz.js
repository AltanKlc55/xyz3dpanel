"use strict";
(() => {
var exports = {};
exports.id = 7178;
exports.ids = [7178];
exports.modules = {

/***/ 9541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ yazicilarimiz)
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
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
// EXTERNAL MODULE: external "@mui/material/Input"
var Input_ = __webpack_require__(1582);
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "mdi-material-ui/TrendingUp"
var TrendingUp_ = __webpack_require__(9830);
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);
// EXTERNAL MODULE: ./src/views/components/ckEditor/TextEditor.js
var TextEditor = __webpack_require__(7990);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
;// CONCATENATED MODULE: ./src/views/form-layouts/YazicilarForm.js















const YazicilarForm = ({ reDatas , closeModal  })=>{
    const { 0: editorLoaded , 1: setEditorLoaded  } = (0,external_react_.useState)(false);
    const { 0: selectedBannerFile , 1: setSelectedBannerFile  } = (0,external_react_.useState)("");
    const { 0: data , 1: setData  } = (0,external_react_.useState)("");
    const { 0: bannerfile , 1: setBannerFile  } = (0,external_react_.useState)();
    const { 0: hakkimizdaFile , 1: setHakkimizdaFile  } = (0,external_react_.useState)();
    const { 0: selectHakkimizdaFile , 1: setSelectHakkimizdaFile  } = (0,external_react_.useState)("");
    const { 0: sayfaBasligi , 1: setSayfaBasligi  } = (0,external_react_.useState)();
    const { 0: hakkimizdaContent , 1: setHakkimizdaContent  } = (0,external_react_.useState)();
    const { 0: uploading , 1: setUploading  } = (0,external_react_.useState)(false);
    const images = {};
    const handleChangeHakkimizda = (newContent)=>{
        setHakkimizdaContent(newContent);
    };
    (0,external_react_.useEffect)(()=>{
        setEditorLoaded(true);
    }, []);
    const baslikHandleChange = (event)=>{
        setSayfaBasligi(event.target.value);
    };
    const onSubmit = async ()=>{
        setUploading(true);
        const formData = new FormData();
        try {
            formData.append("bannerImg", bannerfile);
        } catch (error) {
            console.log(error);
        }
        try {
            if (!hakkimizdaFile) return;
            formData.append("yaziciImg", hakkimizdaFile);
        } catch (error1) {
            console.log(error1);
        }
        const responseImg = await fetch("/api/newfileupload", {
            method: "POST",
            body: formData
        });
        const newimg = await responseImg.json();
        const images = newimg.files;
        const banner = images.filter((item)=>item.fieldName === "bannerImg");
        const img = images.filter((item)=>item.fieldName === "yaziciImg");
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                yaziciIcerigi: hakkimizdaContent,
                yaziciBasligi: sayfaBasligi,
                banner: banner.length === 0 ? selectedBannerFile.split("/")[2] : banner[0].name,
                img: img.length === 0 ? selectSektorlerFile.split("/")[2] : img[0].name
            })
        };
        const res = await fetch(`${"http://testpanel.pixwaragerncy.com/"}/api/yazicilar`, postData);
        reDatas();
        closeModal();
    };
    (0,external_react_.useEffect)(()=>{
        console.log(data);
    }, [
        data
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: (e)=>e.preventDefault(),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            mt: 3,
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                fullWidth: true,
                                label: "Yazıcı Başlığı",
                                placeholder: "Yazıcı Başlığı",
                                onChange: baslikHandleChange
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    style: {
                                        paddingBottom: 10
                                    },
                                    children: " Yazıcı \xd6zellikleri "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TextEditor/* default */.Z, {
                                    editorStatus: editorLoaded,
                                    onChange: handleChangeHakkimizda
                                })
                            ]
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
                                        "Yazıcı G\xf6rseli Y\xfckle",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
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
                                selectHakkimizdaFile !== "" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: selectHakkimizdaFile,
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
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            style: {
                                textAlign: "center"
                            },
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
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
/* harmony default export */ const form_layouts_YazicilarForm = (YazicilarForm);

;// CONCATENATED MODULE: ./src/views/form-layouts/YazicilarDuzenleForm.js













const YazicilarDuzenleForm = ({ dataUpdates , closeModal , reDatas  })=>{
    const { 0: editorLoaded , 1: setEditorLoaded  } = (0,external_react_.useState)(false);
    const { 0: selectedBannerFile , 1: setSelectedBannerFile  } = (0,external_react_.useState)("/uploads/" + dataUpdates.banner);
    const { 0: uploading , 1: setUploading  } = (0,external_react_.useState)(false);
    const { 0: bannerfile , 1: setBannerFile  } = (0,external_react_.useState)("/uploads/" + dataUpdates.banner);
    const { 0: hakkimizdaFile , 1: setHakkimizdaFile  } = (0,external_react_.useState)("/uploads/" + dataUpdates.img);
    const { 0: selectHakkimizdaFile , 1: setSelectHakkimizdaFile  } = (0,external_react_.useState)("/uploads/" + dataUpdates.img);
    const { 0: sayfaBasligi , 1: setSayfaBasligi  } = (0,external_react_.useState)(dataUpdates.name);
    const { 0: hakkimizdaContent , 1: setHakkimizdaContent  } = (0,external_react_.useState)(dataUpdates.content);
    const imagesOld = {};
    const handleChangeHakkimizda = (newContent)=>{
        setHakkimizdaContent(newContent);
    };
    (0,external_react_.useEffect)(()=>{
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
                yaziciIcerigi: hakkimizdaContent,
                yaziciBasligi: sayfaBasligi,
                banner: banner.length === 0 ? selectedBannerFile.split("/")[2] : banner[0].name,
                img: img.length === 0 ? selectHakkimizdaFile.split("/")[2] : img[0].name
            })
        };
        const res = await fetch(`${"http://testpanel.pixwaragerncy.com/"}/api/yazicilar`, postData);
        const response = await res.json();
        console.log(response);
        reDatas();
        closeModal();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: (e)=>e.preventDefault(),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            mt: 3,
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                fullWidth: true,
                                label: "Sekt\xf6r Başlığı",
                                placeholder: "Sekt\xf6r Başlığı",
                                value: sayfaBasligi,
                                onChange: baslikHandleChange
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    style: {
                                        paddingBottom: 10
                                    },
                                    children: " Hizmet İ\xe7eriği "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TextEditor/* default */.Z, {
                                    editorStatus: editorLoaded,
                                    contentsforupdate: dataUpdates.content,
                                    onChange: handleChangeHakkimizda
                                })
                            ]
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
                                        "Yazıcı G\xf6rseli Değiştir",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Input_default()), {
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
                                selectHakkimizdaFile !== "" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: selectHakkimizdaFile,
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
                                        "Yazıcı G\xf6rseli Değiştir",
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
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            style: {
                                textAlign: "center"
                            },
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
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
/* harmony default export */ const form_layouts_YazicilarDuzenleForm = (YazicilarDuzenleForm);

// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/TablePagination"
var TablePagination_ = __webpack_require__(7308);
var TablePagination_default = /*#__PURE__*/__webpack_require__.n(TablePagination_);
;// CONCATENATED MODULE: ./src/views/tables/TableStickyHeaderYazici.js











const TableStickyHeaderYazici = ({ data , handleClickFunc , openDuzenleModal  })=>{
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(0);
    const { 0: rowsPerPage , 1: setRowsPerPage  } = (0,external_react_.useState)(10);
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
        sx: {
            width: "100%",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                sx: {
                    maxHeight: 440
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                    stickyHeader: true,
                    "aria-label": "sticky table",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        style: {
                                            width: 50
                                        },
                                        children: "ID"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        style: {
                                            width: 50
                                        },
                                        children: "Yazıcı Başlığı"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        style: {
                                            width: 150
                                        },
                                        children: "Banner"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        style: {
                                            width: 150
                                        },
                                        children: "Yazıcı G\xf6rseli"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        style: {
                                            width: 150
                                        },
                                        children: "Oluşturulma Tarihi"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        style: {
                                            width: 300
                                        },
                                        children: "İşlem"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                            children: data.map((column, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    hover: true,
                                    role: "checkbox",
                                    tabIndex: -1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: column.id
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: column.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: column.banner
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: column.img
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            children: column.date_time
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            style: {
                                                width: 300,
                                                textAlign: "center"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                style: {
                                                    flexDirection: "row"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                        style: {
                                                            color: "white",
                                                            width: 85,
                                                            margin: 5
                                                        },
                                                        variant: "contained",
                                                        onClick: ()=>openDuzenleModal(column.id, column),
                                                        children: "D\xfczenle"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
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
            /*#__PURE__*/ jsx_runtime_.jsx((TablePagination_default()), {
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
/* harmony default export */ const tables_TableStickyHeaderYazici = (TableStickyHeaderYazici);

;// CONCATENATED MODULE: ./src/pages/yazicilarimiz/index.js












const MUITable = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: openUpdate , 1: setOpenUpdate  } = (0,external_react_.useState)(false);
    const { 0: tableData , 1: setTableData  } = (0,external_react_.useState)([]);
    const { 0: updatedData , 1: setUpdatedData  } = (0,external_react_.useState)([]);
    const { 0: rand , 1: setRand  } = (0,external_react_.useState)();
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const handleUpdateOpen = (event, data)=>{
        setOpenUpdate(true);
        setUpdatedData(data);
        console.log(data);
    };
    const handleUpdateClose = ()=>{
        setOpenUpdate(false);
    };
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "%90",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        overflow: "auto",
        height: 700,
        pt: 2,
        px: 4,
        pb: 3
    };
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
        const res = await fetch(`${"http://testpanel.pixwaragerncy.com/"}/api/yazicilar`, postData);
        const response = await res.json();
        setTableData(response.hizmetler);
    };
    (0,external_react_.useEffect)(()=>{
        getDatas();
    }, [
        rand
    ]);
    const handleClick = async (id)=>{
        console.log(id);
        const deleteData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                action: "delete"
            })
        };
        const res = await fetch(`${"http://testpanel.pixwaragerncy.com/"}/api/sektorler`, deleteData);
        const response = await res.json();
        console.log(response);
        rastgeleSayiUret();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                xs: 10,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                            children: "Yazıcılar"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "body2",
                        children: "Hizmet Verilen Yazıcılar"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                xs: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        onClick: handleOpen,
                        children: "Yazıcı Ekle"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                        open: open,
                        onClose: handleClose,
                        "aria-labelledby": "child-modal-title",
                        "aria-describedby": "child-modal-description",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...style,
                                width: 800
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    id: "child-modal-title",
                                    children: "Yeni Sekt\xf6r Ekle"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_layouts_YazicilarForm, {
                                    reDatas: rastgeleSayiUret,
                                    closeModal: handleClose
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    onClick: handleClose,
                                    children: "İptal"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                        open: openUpdate,
                        onClose: handleUpdateClose,
                        "aria-labelledby": "child-modal-title",
                        "aria-describedby": "child-modal-description",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            sx: {
                                ...style,
                                width: 800
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    id: "child-modal-title",
                                    children: "D\xfczenle"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(form_layouts_YazicilarDuzenleForm, {
                                    dataUpdates: updatedData,
                                    reDatas: rastgeleSayiUret,
                                    closeModal: handleUpdateClose
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    onClick: handleUpdateClose,
                                    children: "İptal"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.CardHeader, {
                            title: "Yazıcı Tablosu",
                            titleTypographyProps: {
                                variant: "h6"
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(tables_TableStickyHeaderYazici, {
                            data: tableData,
                            handleClickFunc: handleClick,
                            openDuzenleModal: handleUpdateOpen
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const yazicilarimiz = (MUITable);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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

/***/ 9564:
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 8099:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 7308:
/***/ ((module) => {

module.exports = require("@mui/material/TablePagination");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 6451:
/***/ ((module) => {

module.exports = require("@tinymce/tinymce-react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [3598,5675,7990], () => (__webpack_exec__(9541)));
module.exports = __webpack_exports__;

})();