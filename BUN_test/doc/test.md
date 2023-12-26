## bun test
```js
import {describe, expect, test, beforeAll} from 'bun:test'

beforeAll(() => {
    //setup test
})

describe('math', () => {
    test('addition', () => {
        expect(1 + 1).toBe(2)
    })
})
```