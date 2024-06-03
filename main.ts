class Pipe<T> {
  constructor(private value: T) {}

  then<U>(fn: (val: T) => U): Pipe<U> {
    return new Pipe(fn(this.value));
  }

  end(): T {
    return this.value;
  }
}

export default function pipe<T>(val: T): Pipe<T> {
  return new Pipe(val);
}
