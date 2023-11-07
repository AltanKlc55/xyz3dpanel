"use strict";
(() => {
var exports = {};
exports.id = 9063;
exports.ids = [9063];
exports.modules = {

/***/ 2764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ query)
});

;// CONCATENATED MODULE: external "mysql2/promise"
const promise_namespaceObject = require("mysql2/promise");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/db.js

async function query({ query , values =[]  }) {
    const dbconnection = await promise_default().createConnection({
        host: "localhost",
        database: "pixwarag_db",
        user: "pixwarag_user",
        password: "569155Sam.",
        charset: "utf8mb4"
    });
    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error) {
        throw Error(error.message);
        return {
            error
        };
    }
}


/***/ }),

/***/ 1434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2764);

async function handler(req, res) {
    if (req.method === "GET") {
        const hizmetler = await (0,src_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: "SELECT * FROM tbl_sektorler",
            values: []
        });
        res.status(200).json({
            hizmetler: hizmetler
        });
    }
    if (req.method === "POST") {
        const datas = req.body;
        const baslik = datas.sektorBasligi;
        const icerik = datas.sektorIcerigi;
        const banner = datas.banner;
        const img = datas.img;
        let message = "";
        const addHizmet = await (0,src_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: "INSERT INTO tbl_sektorler (name,content,banner,img) VALUES (?,?,?,?)",
            values: [
                baslik,
                icerik,
                banner,
                img
            ]
        });
        if (addHizmet.insertId) {
            message = "ok";
        } else {
            message = "no";
        }
        let sektorler = {
            hizmetId: addHizmet.insertId,
            hizmetbaslik: datas.sektorBasligi
        };
        res.status(200).json({
            response: {
                message: message,
                sektorler: sektorler
            }
        });
    }
    if (req.method === "DELETE") {
        const datas1 = req.body;
        let message1 = "";
        const dellHizmet = await (0,src_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: "DELETE FROM tbl_sektorler WHERE id = ?",
            values: [
                datas1.id
            ]
        });
        if (dellHizmet) {
            message1 = "ok";
        } else {
            message1 = "no";
        }
        res.status(200).json({
            response: {
                message: message1
            }
        });
    }
    if (req.method === "PUT") {
        let message2 = "";
        const datas2 = req.body;
        const baslik1 = datas2.sektorBasligi;
        const icerik1 = datas2.sektorIcerigi;
        const banner1 = datas2.banner;
        const img1 = datas2.img;
        const id = datas2.id;
        const updateHizmet = await (0,src_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: "UPDATE tbl_sektorler SET name = ?, content = ?, banner = ?, img = ? WHERE id = ?",
            values: [
                baslik1,
                icerik1,
                banner1,
                img1,
                id
            ]
        });
        const result = updateHizmet.affectedRows;
        if (result) {
            message2 = "ok";
        } else {
            message2 = "no";
        }
        res.status(200).json({
            response: {
                message: message2,
                sektorler: result
            }
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1434));
module.exports = __webpack_exports__;

})();