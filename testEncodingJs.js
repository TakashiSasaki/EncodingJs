var EncodingJs = require("./EncodingJs.js");
var assert = require("assert");
var text  = "本日は晴天なり";
assert.equal(EncodingJs.detect(text),                            "UNICODE");
assert.equal(EncodingJs.detect("u0001\u0002\u0003"),             "BINARY");
assert.equal(EncodingJs.detect("abcde"),                         "ASCII");
assert.equal(EncodingJs.detect(EncodingJs.toUTF16(text)),        "UNICODE");
assert.equal(EncodingJs.detect(EncodingJs.toUTF16BE(text)),      "UNICODE");
assert.equal(EncodingJs.detect(EncodingJs.toUTF16LE(text)),      "UNICODE");
assert.equal(EncodingJs.detect(EncodingJs.toJIS(text)),          "JIS");
assert.equal(EncodingJs.detect(EncodingJs.toUTF8(text)),         "UTF8");
assert.equal(EncodingJs.detect(EncodingJs.toEUCJP(text)),        "EUCJP");
assert.equal(EncodingJs.detect(EncodingJs.toSJIS(text)),         "SJIS");
assert.equal(EncodingJs.detect(EncodingJs.toUNICODE(text)),      "UNICODE");

assert(EncodingJs.isUNICODE  (text));
assert(EncodingJs.isBINARY   ("u0001\u0002\u0003"));
assert(EncodingJs.isASCII    ("abcde"));
assert(EncodingJs.isUNICODE  (EncodingJs.toUTF16LE(text)));
assert(EncodingJs.isUNICODE  (EncodingJs.toUTF16BE(text)));
assert(EncodingJs.isUNICODE  (EncodingJs.toUTF16(text)));
assert(EncodingJs.isJIS      (EncodingJs.toJIS(text)));
assert(EncodingJs.isUTF8     (EncodingJs.toUTF8(text)));
assert(EncodingJs.isSJIS     (EncodingJs.toSJIS(text)));

assert.equal(EncodingJs.fromUTF16(EncodingJs.toUTF16(text)), text);
assert.equal(EncodingJs.fromUTF16BE(EncodingJs.toUTF16BE(text)), text);
assert.equal(EncodingJs.fromUTF16LE(EncodingJs.toUTF16LE(text)), text);
assert.equal(EncodingJs.fromJIS(EncodingJs.toJIS(text)), text);
assert.equal(EncodingJs.fromUTF8(EncodingJs.toUTF8(text)), text);
assert.equal(EncodingJs.fromEUCJP(EncodingJs.toEUCJP(text)), text);
assert.equal(EncodingJs.fromSJIS(EncodingJs.toSJIS(text)), text);
assert.equal(EncodingJs.fromUNICODE(EncodingJs.toUNICODE(text)), text);

