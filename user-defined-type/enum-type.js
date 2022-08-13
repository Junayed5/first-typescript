//Three type of enum : numeric, string, hetergenous: mix of numeric and string
// Numeric type
var RequestType;
(function (RequestType) {
    RequestType[RequestType["id"] = 101] = "id";
    RequestType[RequestType["roll"] = 3] = "roll";
})(RequestType || (RequestType = {}));
// string
var RequestType2;
(function (RequestType2) {
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType);
