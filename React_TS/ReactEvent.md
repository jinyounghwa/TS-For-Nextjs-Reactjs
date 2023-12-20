## ReactEvent 타입스크립트 사용방법 설명

```js
"use client";
import React from "react";

const EventExample = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted!`);
  };

  return (
    <div className="eventExample">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
      </form>
      <form className="post">
        <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  );
};

export default EventExample;
```

- 이 코드에서 ```e: React.MouseEvent<HTMLButtonElement>``` 을 사용하는 이유는 버튼 엘리먼트 객체를 사용할 수 있는지 확인하기 위함이다. 
- ```handleClick``` 메서드는 React.MouseEvent 타입의 이벤트를 인자로 받는다. 따라서 TypeScript는 handleClick() 메서드가 호출될 수 있는지 확인한다.