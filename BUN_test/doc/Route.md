## Bun Route
```js
const server = Bun.serve({
    port: Bun.env.PORT || 3000,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === '/') return new Response('Hello World!');
        if (url.pathname === '/blog') return new Response('My Blog!');
        return new Response('404!');
    }
});

console.log(`Server running at ${server.port}`);
```

