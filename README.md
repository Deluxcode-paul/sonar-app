# sonar.software
##### Gather dependencies

```shell
cd ./sonar.software
```

```shell
npm install
```

That's it, hopefully.

##### Building for production

```shell
npm run-script build
```

Static files will be found in newly created `./dist` folder, and can be served with NGINX with a simple location line:

```nginx
  ...
  location / {
    try_files $uri $uri/ /index.html;
  }
```

##### Running development server

```shell
npm run-script serve
```

### Motion graphics

To help prepare motion graphics for production, I've written a CLI called `vidpack.js`. It takes a .mp4 file and generates various versions for the website. For example, `test.mp4` would have `test.webm`, `test_small.mp4` and `test_small.webm` generated.

Please ensure that you don't include the file extension when using. It'll assume you're referencing an .mp4 file as a relative path. You must have FFMPEG installed on your machine to use this CLI.

Usage: `node vidpack.js ./public/assets/vid`