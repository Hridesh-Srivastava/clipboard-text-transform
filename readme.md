![Image 1](https://raw.githubusercontent.com/Hridesh-Srivastava/clipboard-text-transform/main/images/npmX.png)




# Clipboard Transform

## Description
The `clipboard-transform` package allows you to easily transform text to different formats such as uppercase, lowercase, and camel case. It also provides functionality to copy transformed text directly to the clipboard.
The modes you can use for conversions are : <pre> 'upper' , 'lower' , 'camel' </pre>

## Installation
To install the package, run the following command in your terminal:

```bash
npm install clipboard-transform
```

## CommonJS Syntax
If you are using CommonJS syntax, you can import the package like this:

```javascript
const { applyTransformation } = require('clipboard-transform');
```

## ES6 Import Syntax
For ES6 modules, you can use the following syntax:

```javascript
import { applyTransformation } from 'clipboard-transform';
```

## JS Code Usage Example
Here is an example of how to use the `applyTransformation` function in your JavaScript project:

```javascript
import { applyTransformation } from "clipboard-transform";

const text = "Hridesh srivastava";
const mode = "upper";  // Modes: 'upper', 'lower', 'camel'

applyTransformation(text, mode).then(result => {
    console.log(`Transformed Text: ${result}`);
});
```

## HTML Usage (Outside the Node.js Environment)
You can also use this package in a browser environment by including the provided `index.html` file. Here’s a sample HTML code that demonstrates how to use the package:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clipboard Transform</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background: gray;
        }
    </style>
</head>
<body>
     <h1 style="color:rgb(200, 255, 0);text-align:center;">Welcome to clipboard transform</h1>
    <br>
    <h1 style="color:aqua;text-align:center;" id="output">Text will be copied to clipboard</h1>

    <script type="module">
        import { applyTransformation } from './node_modules/clipboard-transform/src/index.js';

        const text = "Hridesh srivastava";
        const mode = "upper"; // Modes: 'upper', 'lower', 'camel'

        applyTransformation(text, mode).then(result => {
            console.log(`Transformed Text: ${result}`);
            document.getElementById('output').textContent = `✅ Your text successfully copied to clipboard.`;
        });
    </script>
</body>
</html>
```

**Note:** Be aware that your Node.js terminal might not support clipboard operations. You can use the HTML file provided as a sample to test the functionality in a browser.

## Contributions
We welcome suggestions and contributions regarding this package. If you find any issues or have feature requests, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for more details.
