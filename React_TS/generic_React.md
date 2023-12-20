## React 에서 제네릭 사용하기

```js
type ItemProps<T> = {
    id:number,
    title:string,
    extra:T[]
}
const Item = (props:ItemProps<object>) => {
    return <div>Item</dib>
}
```
- 여기서 제네릭을 사용하여 다른 타입을 받아 들일 수 있게 하였다. 


* 호출할 다른 페이지
  ```js
  const ItemList = () => {
    return(
        <div>
        <Item id={1} title="post title" extra={[{
            id:1,
            username:"john",
        }]}>
        </div>
    )
  }
  ```
  - 호출할 다른 페이지에 대해서는 객체로 추가 할 수 있다. 