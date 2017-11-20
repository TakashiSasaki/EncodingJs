.PHONY: all test clean

all: test EncodingJs.js.html EncodingJs.gs

test: 
	node testEncodingJs.js

EncodingJs.js.html: EncodingJs.gs
	(echo "<script>"; cat $< ; echo "var EncodingJs = require('EncodingJs.gs');</script>") > $@

EncodingJs.gs: EncodingJs.js
	browserify -r ./EncodingJs.js:EncodingJs -o $@ 

#wrapper.gs: EncodingJs.js
#	cp $< $@

clean:
	rm -f EncodingJs.gs EncodingJs.js.html

