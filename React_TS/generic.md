## 타입스크립트 제네릭 
- gn.ts 파일 설명함

```js
interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    content: string;
    extra: IAuthor[] | ICategory[];
}
```
- IPost 인터페이스에 extra로 배열 인터페이스로 IAuthor, ICategory 를 선언해서 사용할 수 있다.

```js
const testMe: IPropsBetter<String>  = {
    id: 1,
    title: 'test',
    description: 'test',
    extra: ['test', 'test2'],
}

interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    content: string;
    extra: T[];
} 

const testMe2: IPostEvenBetter<IAuthor>  = {
    id: 1,
    title: 'test',
    content: 'test',
    extra: [{id: 1, username: 'test'}],
}

const testMe3: IPostEvenBetter<ICategory>  = {
    id: 1,
    title: 'test',
    content: 'test',
    extra: [{id: 1, title: 'test'}],
}
```
- 첫번째는 제네릭을 String 타입으로 설명한 것이다.
- interface IPostEvenBetter는 extends를 사용하여 매개변수가 객체여야 한다는 것을 의미한다.
- testMe2, testMe3 는 IPostEvenBetter유형으로 선연되며 이것은 T 제네릭 매게변수가 객체여야 한다는 것을 의미한다.