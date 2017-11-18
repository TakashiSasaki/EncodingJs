.PHONY: all test testEncodingJs clean

all: test EncodingJs.js.html

test: 
	node testEncodingJs.js

EncodingJs.js.html: EncodingJs.gs
	(echo "<script>"; cat $< ; echo "var EncodingJs = require('EncodingJs.gs');</script>") > $@

EncodingJs.gs: ./encoding.js/encoding.js
	browserify -r ./encoding.js/encoding.js:EncodingJs -o $@ 

clean:
	rm -f Encoding.gs Encoding.js.html

