# Trim Obj

Recursively trim object values.

## Install

### NPM

```
npm install trim-obj
```

### Yarn

```
yarn add trim-obj
```

### Usage

```js
import { trimObj } from "trim-obj";

const input = {
  firstName: " Lewis",
  lastName: "Hamilton  ",
  age: 36,
  avatar: {
    url: "    https://static.wixstatic.com/media/23204b_787f58851a1042648b78f23f45adfe5c~mv2.jpg/v1/fill/w_1710,h_1592,al_c,q_90/23204b_787f58851a1042648b78f23f45adfe5c~mv2.webp  ",
    size: ["1000 ", " 2000px "],
  },
};

const output = trimObj(input);

console.log(output);
// {
//   firstName: "Lewis",
//   lastName: "Hamilton",
//   age: 36,
//   avatar: {
//     url: "https://static.wixstatic.com/media/23204b_787f58851a1042648b78f23f45adfe5c~mv2.jpg/v1/fill/w_1710,h_1592,al_c,q_90/23204b_787f58851a1042648b78f23f45adfe5c~mv2.webp",
//     size: ["1000", "2000px"],
//   },
// }
console.log(output === input);
// false
```
