"use strict";
exports.id = 7990;
exports.ids = [7990];
exports.modules = {

/***/ 7990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6451);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2__);



function TextEditor({ onChange , contentsforupdate  }) {
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(contentsforupdate);
    const handleEditorChange = (newContent, editor)=>{
        setContent(newContent);
        if (typeof onChange === "function") {
            onChange(newContent);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_2__.Editor, {
            apiKey: "six2yo4bzxd8f2i0vym67wgolcxzgkn91hg7gcs24josbvs1",
            onInit: (evt, editor)=>editorRef.current = editor,
            onEditorChange: handleEditorChange,
            content: content,
            initialValue: contentsforupdate !== undefined ? contentsforupdate : "",
            init: {
                height: 500,
                menubar: "file edit view insert format tools table",
                plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "hr", 
                ],
                toolbar: "undo redo | blocks | " + "bold italic forecolor | alignleft aligncenter " + "alignright alignjustify | bullist numlist outdent indent image| " + "removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                image_uploadtab: true,
                images_upload_url: "http://localhost:3000/uploads/"
            }
        })
    });
}


/***/ })

};
;