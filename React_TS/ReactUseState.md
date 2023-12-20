## React useState 를 TypeScript 에서 사용하자
```js
"use client";
import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);
  // 또는 이렇게 할 수 있다.
  // const [user, setUser] = useState<UserType>();
  // const [user, setUser] = useState<T>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
      {/* BE AWARE */}
      {user?.name}
    </div>
  );
};

export default UseStateExample;
```
1. type UserType = { sessionId: number; name: string; };

- 이 코드는 UserType이라는 이름의 유형을 정의합니다. 이 유형은 세션 ID와 이름을 가진 사용자를 나타냅니다. 이 유형은 코드의 형식 안전성을 보장하는 데 도움이 됩니다.

2. const UseStateExample = () => { ... };

- 이 코드는 UseStateExample이라는 이름의 함수형 React 구성 요소를 정의합니다.

3. const [username, setUsername] = useState("");

- 이 코드는 username이라는 이름의 상태 변수를 정의합니다. 이 변수는 사용자가 입력한 사용자 이름을 저장합니다. 초기값은 빈 문자열입니다.

4. const [user, setUser] = useState<UserType | null>(null);

- 이 코드는 user이라는 이름의 상태 변수를 정의합니다. 이 변수는 로그인한 사용자에 대한 정보를 저장합니다. 초기값은 null로, 로그인한 사용자가 없다는 것을 나타냅니다.

5. handleChange

- 이 함수는 username 입력 필드의 변경 사항을 처리합니다. username 상태 변수를 새 값으로 업데이트합니다.

6. handleClick

- 이 함수는 로그인 버튼 클릭을 처리합니다. 기본 양식 제출 동작을 방지하고, 입력한 사용자 이름과 임의의 세션 ID를 사용하여 새 UserType 개체를 만들고, user 상태 변수를 사용하여 로그인한 사용자 정보를 저장합니다.

7. {user ? ( ... ) : ( ... )}

- 이 코드는 사용자가 로그인했는지 여부에 따라 다른 콘텐츠를 조건부로 렌더링합니다.

- user가 null이 아닌 경우(즉, 사용자가 로그인한 경우) 사용자 이름이 포함된 메시지를 표시합니다.
- user가 null인 경우(로그인한 사용자가 없는 경우) 사용자 이름 입력 필드와 로그인 버튼이 포함된 로그인 양식을 렌더링합니다.
8. {user?.name}

- 이 코드는 user 개체의 name 속성에 안전하게 액세스합니다. user이 null이 아닌 경우에만 이를 표시합니다.




