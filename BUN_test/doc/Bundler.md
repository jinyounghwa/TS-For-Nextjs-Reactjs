## 번들러


 - src/index.ts
```js
import fetchUser from "./githubAPI";

(async () => {
    const user = await fetchUser("brad");
    document.querySelector('h1').innerHTML = JSON.stringify(user);
})();
```

- src/githubAPI.ts

```js
import axios from "axios";

async function fetchUser(user) {
    const res = await axios.get(`https://api.github.com/users/` + user);
    return res.data;
}

export default fetchUser;
```

`./src/index.ts --outfile=./dist/bundle.js` 터미널에 입력
