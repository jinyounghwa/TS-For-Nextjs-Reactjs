## Bun Serve

- 서버를 동작할 때 다음과 같이 사용한다.
```js
const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response('Hello World!');
    }
});

console.log(`Server running at ${server.url}`);
```