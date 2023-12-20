## UseRef 를 타입스크립트로 
```js
const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log("username is: " + usernameInputRef.current?.value);
  };

  return (
    <div className="useRefExample">
      <input ref={inputRef} type="text" placeholder="focus here" />
      <input ref={usernameInputRef} type="text" placeholder="username" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

```
1. Refs생성
```js
const inputRef = useRef<HTMLInputElement>(null);
const usernameInputRef = useRef<HTMLInputElement>(null);
```
- 이 두 줄은 각각 inputRef와 usernameInputRef라는 이름의 ref를 생성합니다. ref는 DOM 요소에 대한 참조를 저장하는 데 사용할 수 있습니다. 첫 번째 ref는 null로 초기화됩니다. 이는 DOM 요소가 아직 존재하지 않기 때문입니다. 두 번째 ref도 마찬가지로 초기화됩니다.

2. 입력 요소에 초점 맞추기

```js
useEffect(() => {
  inputRef.current?.focus();
}, []);
```
- 이 useEffect는 컴포넌트가 마운트될 때 실행됩니다. inputRef.current?.focus()는 inputRef가 참조하는 입력 요소에 초점을 맞추려고 시도합니다. ?. 연산자는 current가 null이 아닌 경우에만 focus() 메서드를 호출하도록 합니다.

3. 클릭처리

```js
const handleClick = () => {
  console.log("username is: " + usernameInputRef.current?.value);
};
```
- 이 함수는 클릭 이벤트를 처리합니다. usernameInputRef.current?.value를 사용하여 usernameInput의 값을 안전하게 액세스합니다.

4. 랜더링

```js
return (
  <div className="useRefExample">
    <input ref={inputRef} type="text" placeholder="focus here" />
    <input ref={usernameInputRef} type="text" placeholder="username" />
    <button onClick={handleClick}>Send</button>
  </div>
);

```
### 이 return 문은 다음 요소를 렌더링합니다.

- 두 개의 입력 요소:
1)  하나는 ref={inputRef}를 사용하여 첫 번째 ref를 할당합니다.
2) 다른 하나는 ref={usernameInputRef}를 사용하여 두 번째 ref를 할당합니다.
- onClick={handleClick}을 사용하여 클릭 핸들러를 트리거하는 버튼

### 이 코드는 다음을 보여줍니다.

- useRef를 사용하여 React 컴포넌트에서 DOM 요소에 직접 액세스하는 방법
- 컴포넌트가 마운트될 때 입력 요소에 초점을 맞추는 방법
- 클릭 이벤트를 처리하는 방법