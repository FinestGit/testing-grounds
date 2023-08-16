import React, { useEffect, useRef, useState } from "react";
import { Subject, debounceTime } from "rxjs";

const TestDebounceSetState: React.FC = () => {
  const [foo, setFoo] = useState<number>(0);
  const [, setBar] = useState<string>("");

  const changed$ = useRef(new Subject<{ foo: number; bar: string }>());

  useEffect(() => {
    const subscription = changed$.current
      .pipe(debounceTime(0))
      .subscribe(({ foo, bar }) => {
        // eslint-disable-next-line no-undef
        console.log(`${foo} + ${bar}`);
      });

    return () => subscription.unsubscribe();
  }, []);

  const clickHandler = (): void => {
    const newFoo = foo + 1;
    const newBar = `test ${foo}`;
    setFoo(newFoo);
    setBar(newBar);
    changed$.current.next({ foo: newFoo, bar: newBar });
  };

  return (
    <button onClick={() => clickHandler()}>Test Debounce Set State</button>
  );
};

export default TestDebounceSetState;
