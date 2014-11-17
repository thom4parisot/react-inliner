# react-inliner

> React components rendered and inlined server-side.

Stream HTML in, get React-rendered HTML out and improve your app SEO and accessibility!

# Install

```bash
npm install --save react-inliner
```

# `data-react-inliner`

```html
<!DOCTYPE html>
<html>
<body>
  <h1>My Cool React Single Page App</h1>

  <nav data-react-inliner="src/nav.js"></nav>
  <main data-react-inliner="src/app.js"></main>
</body>
</html>
```

# Usage

## From the command line

```bash
react-inliner inputFile.html -o outputFile.html

cat inputFile.html | react-inliner -o outputFile.html

cat inputFile.html | react-inliner | htmlhint
```

## In your `package.json`

```json
{
  // …
  "scripts": {
    "build-html": "react-inliner src/index.html -o dist/index.html"
  }
```

Then run `npm run build-html`.

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