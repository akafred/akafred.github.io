
all: start open

build:
	docker run --rm -v "`pwd`:/src" grahamc/jekyll build

start:
	docker run --rm -v "`pwd`:/usr/src/app" --name="jekyll_builder" robertwtucker/github-pages jekyll build --watch &
	docker run --rm -v "`pwd`:/usr/src/app" --name="jekyll_server" -p 4000:4000 robertwtucker/github-pages jekyll serve -H 0.0.0.0 &

stop:
	docker stop jekyll_server
	docker stop jekyll_builder

open:
	open "http://localhost:4000"
