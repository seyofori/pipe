  /**
   * @module
   *
   * This module contains the pipe function
   *
   * @example
   * ```ts
   * import pipe from "@seyofori/pipe";
   * 
   * function add1(val: number){
   *  return val + 1
   * }
   *
   * const answer = pipe(1).then(add1).then(add1).end()
   *       // ^? 3
   * ```
   */

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
