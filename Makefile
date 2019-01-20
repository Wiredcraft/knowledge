.PHONY: all clean install

all: serve clean

clean:
	rm -Rf _site

build: clean
	jekyll build --config _config.yml,_config-build.yml
	rm -f build.zip; zip -r build.zip _site/*

serve:
	jekyll serve --config _config.yml,_config-dev.yml

incremental:
	jekyll serve --config _config.yml,_config-dev.yml --incremental

limit:
	jekyll serve --config _config.yml,_config-dev.yml --incremental --limit_posts 10
