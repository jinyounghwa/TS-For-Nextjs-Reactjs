## env 설정

```js
const server = Bun.serve({
    port: Bun.env.PORT || 3000, // env 설정
    fetch(req) {
        return new Response('Hello World!');
    }
});

console.log(`Server running at ${server.port}`);
```

## package.json
```js
{
  "name": "bun_test",
  "module": "index.ts",
  "type": "module",
  "scripts": {
    "start": "bun run index.ts",
    "dev" : "bun --watch run index.ts"
  },
  "devDependencies": {
    "@types/bun": "latest"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  }
}
```
