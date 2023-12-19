## React 에서 타입스크립트로 Props를 구현하는 방법 설명

- 타입스크립트에서 Props 를 사용하는 방법
  
```js
import React from 'react';
import type {PostProps} from '@types/types';


const PostCard = ({title,body}:PostProps) => {
    return (
        <div className="postCard">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default PostCard;
```
- 위의 코드에서 {title,body}:PostProps 는 아래의 파일에서 불러왔다.

```js
export type PostProps = {title:string; body:string; id:number}
```
- 결국 PostProps의 타입을 정의하기 위해서 만든 것이었다. 
```js
import React from 'react';
import PostCard from './PostCard';
import type {PostProps} from '@types/types';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

const PostList = async() => {

    const data:PostProps[] = await getData();


    return (
       <div className="postList">
              {data.map((post:PostProps) => {
                 <PostCard key={post.id} title={post.title} body={post.body} />
              })}
         </div>
    );
}

export default PostList;
```
- ```const data:PostProps[] = await getData(): getData ```함수를 호출하고 수신된 JSON 데이터(기대되는 PostProps 개체의 배열)를 data 변수에 할당한다. PostProps는 배열로 가져온다.
- ```data.map((post:PostProps) => { ... }): data``` 배열을 반복하고 각 게시물 개체에 대해 PostCard 구성 요소를 렌더링하기 위한 JSX를 생성하고 반환한다.
- ```<PostCard key={post.id} title={post.title} body={post.body} />```: 루프에서 현재 게시물 개체에서 추출된 props를 사용하여 PostCard 구성 요소를 렌더링한다. 효율적인 DOM diffing을 위해 key prop을 게시물의 id로 설정한다.