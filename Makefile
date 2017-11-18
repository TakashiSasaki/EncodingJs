.PHONY: all test testEncodingJs clean

all: test EncodingJs.js.html

test: 
	node testEncodingJs.js

EncodingJs.js.html: EncodingJs.gs
	(echo "<script>"; cat $< ; echo "var EncodingJs = require('EncodingJs.gs');</script>") > $@

EncodingJs.gs: EncodingJs.js
	browserify -r ./EncodingJs.js:EncodingJs -o $@ 

clean:
	rm -f Encoding.gs Encoding.js.html

