# vector-n

Simple vector classes written in Typescript.

[Documentation](https://atticus.dev/vector-n/)

## Installation
```
npm install --save @liamattclarke/vector-n
```

## Example:
```
import { Vector2 } from "vector-n";

const v1 = new Vector2(4, 2);

v1.normalize()
  .negate()
  .rotateDeg(45);
```

## TODOs
- Add Vector3 class
