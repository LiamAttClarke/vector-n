export default class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static fromArray(arr: number[]): Vector2;
    static dot(u: Vector2, v: Vector2): number;
    static distance(v: Vector2, u: Vector2): number;
    static distanceSq(v: Vector2, u: Vector2): number;
    static angleBetweenRad(a: Vector2, b: Vector2): number;
    static angleBetweenDeg(a: Vector2, b: Vector2): number;
    toString(): string;
    toArray(): number[];
    clone(): Vector2;
    add(v: Vector2): this;
    subtract(v: Vector2): this;
    addScalar(n: number): this;
    subtractScalar(n: number): this;
    multiplyByScalar(n: number): this;
    negate(): this;
    length(): number;
    lengthSq(): number;
    magnitude(): number;
    magnitudeSq(): number;
    normalize(): this;
    perpendicular(clockwise?: boolean): this;
    rotateRad(rad: number): this;
    rotateDeg(deg: number): this;
}
//# sourceMappingURL=Vector2.d.ts.map