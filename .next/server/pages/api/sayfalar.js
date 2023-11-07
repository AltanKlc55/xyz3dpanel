"use strict";
(() => {
var exports = {};
exports.id = 1694;
exports.ids = [1694];
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

/***/ 7688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var src_lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2764);

async function handler(req, res) {
    if (req.method === "GET") {
        const sayfalar = await (0,src_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .query */ .I)({
            query: "SELECT * FROM test_tbl",
            values: []
        });
        res.status(200).json({
            sayfalar: sayfalar
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
var __webpack_exports__ = (__webpack_exec__(7688));
module.exports = __webpack_exports__;

})();