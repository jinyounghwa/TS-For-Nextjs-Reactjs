##  React TypeScript reducer 사용
```js
"use client";
import { createContext, useReducer } from "react";

type StateType = {
  theme: string;
  fontSize: number;
};

// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload?: number;
// };

//Discriminated Unions
type ColorActionType = {
  type: "CHANGE_THEME";
};
type SizeActionType = {
  type: "CHANGE_FONTSIZE";
  payload: number;
};

type ActionType = ColorActionType | SizeActionType;

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
```
1. type StateType = { theme: string; fontSize: number; };

- theme 및 fontSize 속성을 가진 StateType 유형을 정의합니다. 이 유형은 컨텍스트에서 관리되는 상태의 구조를 나타냅니다.
2. type ActionType = ColorActionType | SizeActionType;

- 상태 업데이트를 트리거하는 액션의 유형을 정의합니다. 액션은 CHANGE_THEME 또는 CHANGE_FONTSIZE 유형이 될 수 있습니다.
3. const INITIAL_STATE = { theme: "dark", fontSize: 16 };

- 컨텍스트의 초기 상태를 정의합니다. 초기 테마는 "dark", 초기 글꼴 크기는 16입니다.
4. export const ThemeContext = createContext<{ state: StateType; dispatch: React.Dispatch<ActionType>; }>({ state: INITIAL_STATE, dispatch: () => {} });

- ThemeContext라는 React 컨텍스트를 생성합니다. 이 컨텍스트는 상태 및 액션 디스패처를 컴포넌트 트리에 제공할 수 있습니다.
5. const reducer = (state: StateType, action: ActionType) => { ... };

- 상태 업데이트를 처리하는 리듀서 함수를 정의합니다. 이 함수는 액션 유형에 따라 상태를 수정하고 새 상태를 반환합니다.
6. export const ThemeProvider = ({ children }: { children: React.ReactNode }) => { ... };

- ThemeContext.Provider 컴포넌트를 래핑하는 ThemeProvider 컴포넌트를 정의합니다. 이 컴포넌트는 컨텍스트 값을 설정하고 하위 컴포넌트에게 제공합니다.

### 흐름:

1. ThemeProvider는 useReducer를 사용하여 상태 및 디스패처를 관리합니다.
2. ThemeProvider의 하위 컴포넌트는 ThemeContext를 사용하여 상태 및 디스패처에 접근할 수 있습니다.
3. 컴포넌트에서 상태를 변경하려면 dispatch 함수로 액션을 전달합니다.
4. 리듀서는 액션을 처리하고 새 상태를 반환합니다.
5. 컨텍스트의 상태가 업데이트되어 하위 컴포넌트들이 새로운 상태를 반영할 수 있게 합니다.