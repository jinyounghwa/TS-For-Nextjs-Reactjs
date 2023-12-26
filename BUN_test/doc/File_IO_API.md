
## Bun module
```js
import path from 'path';

const filepath = path.join('foo', 'bar', 'image.png');
const filename = path.basename(filepath);

console.log(filename); // image.png
```

## Bun file method
```js
//const data = 'Hello World'
//await Bun.write('file.txt', data)

const file = await Bun.file('file.txt')
console.log(await file.text())
console.log(file.size)
console.log(await file.arrayBuffer())
console.log(await file.stream())
```