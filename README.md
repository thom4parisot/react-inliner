# react-inliner

> React components rendered and inlined server-side.

Stream HTML in, get React-rendered HTML out and improve the SEO and accessibility of your Web pages!

The module is still in its early days and looks forward to be improved.

# Install

```bash
npm install --save react-inliner
```

# How it works

This Node.js module looks for some `data-react-inliner* attributes within HTML content.
It then renders the associated React component and prepends the resulting content into the HTML tag.

```html
<!DOCTYPE html>
<html>
<body>
  <h1>My Cool React Single Page App</h1>

  <nav data-react-inliner="src/nav.jsx"></nav>
  <main data-react-inliner="src/app.js"></main>
</body>
</html>
```

It uses [Streams](http://nodejs.org/api/stream.html) under the hood so the HTML filesize should not matter much.

# Usage

## From the command line

Regular read input

```bash
react-inliner inputFile.html -o outputFile.html
```

By piping HTML in.

```bash
cat inputFile.html | react-inliner -o outputFile.html
```

By piping HTML in and out.

```bash
cat inputFile.html | react-inliner | htmlhint
```

## In your `package.json`

```json
{
  "scripts": {
    "build-html": "react-inliner src/index.html -o dist/index.html"
  }
}
```

Then run `npm run build-html`.

## As an API

```js
var inliner = require('react-inliner');

fs.createReadStream('src/index.html')
  .pipe(inliner())
  .pipe(fs.createWriteStream('dist/index.html');
```

**Warning**: there is an ugly hack preventing `*.less` files to be processed by the `require()` function.
So it might create a black hole in your app if you use the module API.

# License

    The MIT License (MIT)
    Copyright © 2014 Thomas Parisot, https://oncletom.io

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the “Software”), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.