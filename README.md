# Intro

Instant gratification

Use: Run node

```sh
docker run -v $PWD:/src -it --rm ch4nd4n/docker-node-hello node /src/index.js
```

Build:

```sh
docker build -t ch4nd4n/docker-node-hello .
```

Tag:

```sh
docker tag ch4nd4n/docker-node-hello ch4nd4n/docker-node-hello:1.0
```

Use: Node version

```sh
docker run -it --rm ch4nd4n/docker-node-hello node -v
```

Use: Run docker sh

```sh
docker run -v $PWD:/src -it --rm --name docker-node-hello ch4nd4n/docker-node-hello sh
```

