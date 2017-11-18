"use strict";
var encoding = require("./encoding.js/encoding.js");

function detect        (x){return encoding.detect(x);}
function isUTF32       (x){return encoding.detect(x, 'UTF32');}
function isBINARY      (x){return encoding.detect(x, "BINARY");}
function isASCII       (x){return encoding.detect(x, "ASCII");}
function isUTF16       (x){return encoding.detect(x, "UTF16");}
function isUTF16BE     (x){return encoding.detect(x, "UTF16BE");}
function isUTF16LE     (x){return encoding.detect(x, "UTF16LE");}
function isJIS         (x){return encoding.detect(x, "JIS");}
function isUTF8        (x){return encoding.detect(x, "UTF8");}
function isSJIS        (x){return encoding.detect(x, "SJIS");}
function isUNICODE     (x){return encoding.detect(x, 'UNICODE');}

function toUTF16       (a){return encoding.convert(a, {from:"UNICODE", to:"UTF16",    type:"string"})}
function toUTF16BE     (a){return encoding.convert(a, {from:"UNICODE", to:"UTF16BE",  type:"string"})}
function toUTF16LE     (a){return encoding.convert(a, {from:"UNICODE", to:"UTF16LE",  type:"string"})}
function toJIS         (a){return encoding.convert(a, {from:"UNICODE", to:"JIS",      type:"string"})}
function toUTF8        (a){return encoding.convert(a, {from:"UNICODE", to:"UTF8",     type:"string"})}
function toEUCJP       (a){return encoding.convert(a, {from:"UNICODE", to:"EUCJP",    type:"string"})}
function toSJIS        (a){return encoding.convert(a, {from:"UNICODE", to:"SJIS",     type:"string"})}
function toUNICODE     (a){return encoding.convert(a, {from:"UNICODE", to:"UNICODE",  type:"string"})}

function fromUTF16         (a){return encoding.convert(a, {to:"UNICODE", from:"UTF16"})}
function fromUTF16BE       (a){return encoding.convert(a, {to:"UNICODE", from:"UTF16BE"})}
function fromUTF16LE       (a){return encoding.convert(a, {to:"UNICODE", from:"UTF16LE"})}
function fromJIS           (a){return encoding.convert(a, {to:"UNICODE", from:"JIS"})}
function fromUTF8          (a){return encoding.convert(a, {to:"UNICODE", from:"UTF8"})}
function fromEUCJP         (a){return encoding.convert(a, {to:"UNICODE", from:"EUCJP"})}
function fromSJIS          (a){return encoding.convert(a, {to:"UNICODE", from:"SJIS"})}
function fromUNICODE       (a){return encoding.convert(a, {to:"UNICODE", from:"UNICODE"})}

function toHankakuCase    (sOrA){return encoding.toHankakuCase(sOrA);}
function toZenkakuCase    (sOrA){return encoding.toZenkakuCase(sOrA);}
function toHiraganaCase   (sOrA){return encoding.toHiraganaCase(sOrA);}
function toKatakanaCase   (sOrA){return encoding.toKatakanaCase(sOrA);}
function toHankanaCase    (sOrA){return encoding.toHankanaCase(sOrA);}
function toZenkanaCase    (sOrA){return encoding.toZenkanaCase(sOrA);}
function toHankakuSpace   (sOrA){return encoding.toHankakuCase(sOrA);}
function toZenkakuSpace   (sOrA){return encoding.toHankakuCase(sOrA);}

function urlEncode        (a){return encoding.urlEncode(a);}
function urlDecode        (s){return encoding.urlDecode(s);}
function base64Encode     (a){return encoding.base64Encode(a);}
function base64Decode     (s){return encoding.base64Decode(s);}
function codeToString     (c){return encoding.codeToString(c);}
function stringToCode     (s){return encoding.stringToCode(s);}

module.exports = {
  detect      : detect,
  isUTF32     : isUTF32,
  isBINARY    : isBINARY,
  isASCII     : isASCII,
  isUTF16     : isUTF16,
  isUTF16BE   : isUTF16BE,
  isUTF16LE   : isUTF16LE,
  isJIS       : isJIS,
  isUTF8      : isUTF8,
  isSJIS      : isSJIS,
  isUNICODE   : isUNICODE,

  toUTF16      : toUTF16,
  toUTF16BE    : toUTF16BE,
  toUTF16LE    : toUTF16LE,
  toJIS        : toJIS,
  toUTF8       : toUTF8,
  toEUCJP      : toEUCJP,
  toSJIS       : toSJIS,
  toUNICODE    : toUNICODE,

  fromUTF16    : fromUTF16,
  fromUTF16BE  : fromUTF16BE,
  fromUTF16LE  : fromUTF16LE,
  fromJIS      : fromJIS,
  fromUTF8     : fromUTF8,
  fromEUCJP    : fromEUCJP,
  fromSJIS     : fromSJIS,
  fromUNICODE  : fromUNICODE,

  toHankakuCase     : toHankakuCase,
  toZenkakuCase     : toZenkakuCase,
  toHiraganaCase    : toHiraganaCase,
  toKatakanaCase    : toKatakanaCase,
  toHankanaCase     : toHankanaCase,
  toZenkanaCase     : toZenkanaCase,
  toHankakuSpace    : toHankakuSpace,
  toZenkakuSpace    : toZenkakuSpace,

  urlEncode      : urlEncode,   
  urlDecode      : urlDecode,
  base64Encode   : base64Encode,
  base64Decode   : base64Decode, 
  codeToString   : codeToString,
  stringToCode   : stringToCode,
}

