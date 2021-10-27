import { toDegrees, toRadians } from "./utils";

export default class Vector2 {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  /** Returns a Vector2 from an array in the form of [x, y] */
  static fromArray(arr: number[]): Vector2 {
    if (arr.length !== 2) throw new Error("arr.length must be 2.");
    return new Vector2(arr[0], arr[1]);
  }

  /** Returns the dot product of two directions */
  static dot(u: Vector2, v: Vector2): number {
    return u.x * v.x + u.y * v.y;
  }

  /** Returns the distance between two positions */
  static distance(v: Vector2, u: Vector2): number {
    return u.subtract(v).length();
  }

  /** Returns the squared distance between two positions */
  static distanceSq(v: Vector2, u: Vector2): number {
    return u.subtract(v).lengthSq();
  }

  /** Returns the angle in radians between two directions */
  static angleBetweenRad(a: Vector2, b: Vector2): number {
    const p = a.x * b.x + a.y * b.y;
    const n = Math.sqrt(
      (a.x ** 2 + a.y ** 2) * (b.x ** 2 + b.y ** 2),
    );
    const sign = a.x * b.y - a.y * b.x < 0 ? -1 : 1;
    const angle = Math.acos(p / n);
    return sign * angle;
  }

  /** Returns the angle in degrees between two directions */
  static angleBetweenDeg(a: Vector2, b: Vector2): number {
    return toDegrees(Vector2.angleBetweenRad(a, b))
  }

  /**
   * Returns a string representation of the vector
   * Example:
   *    const v = new Vector2(2, 3);
   *    v.toString(); // -> (x: 2, y: 3)
   */
  toString(): string {
    return `(x: ${this.x}, y: ${this.y})`;
  }

  /** Return an array in the form [x, y] */
  toArray(): number[] {
    return [this.x, this.y];
  }

  /** Return a clone of this vector */
  clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }

  /** Add a Vector2 to this vector */
  add(v: Vector2): this {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  /** Subtract a Vector2 from this vector */
  subtract(v: Vector2): this {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  /** Add a scalar to this vector */
  addScalar(n: number): this {
    this.x += n;
    this.y += n;
    return this;
  }

  /** Subtract a scalar from this vector */
  subtractScalar(n: number): this {
    this.x -= n;
    this.y -= n;
    return this;
  }

  /** Multiply this vector by a scalar */
  multiplyByScalar(n: number): this {
    this.x *= n;
    this.y *= n;
    return this;
  }

  /** Negate this vector */
  negate(): this {
    this.x *= -1;
    this.y *= -1;
    return this;
  }

  /** Return the length of this vector */
  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /** Return the squared length of this vector */
  lengthSq(): number {
    return this.x * this.x + this.y * this.y;
  }

  /** Return the length of this vector (alias of `length`) */
  magnitude(): number {
    return this.length();
  }

  /** Return the length of this vector (alias of `lengthSq`) */
  magnitudeSq(): number {
    return this.lengthSq();
  }

  /** Resize the length of the vector to 1.0 */
  normalize(): this {
    const length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  }

  /** Rotate the vector by 90 degrees in either the clockwise or anti-clockwise direction. */
  perpendicular(clockwise = true): this {
    let newX, newY: number;
    if (clockwise) {
      newX = this.y;
      newY = -this.x;
    } else {
      newX = -this.y;
      newY = this.x;
    }
    this.x = newX;
    this.y = newY;
    return this;
  }

  /** Rotate the vector by radians */
  rotateRad(rad: number): this {
    this.x = (this.x * Math.cos(rad)) - (this.y * Math.sin(rad));
    this.y = (this.y * Math.sin(rad)) + (this.y * Math.cos(rad));
    return this;
  }

  /** Rotate the vector by degrees */
  rotateDeg(deg: number): this {
    this.rotateRad(toRadians(deg));
    return this;
  }
}
