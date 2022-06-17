
## Installation
**npm** 
```bash
npm install owl-re-style
```

-To chain multiple styles you can pass an array to the style property of the component
```javascript
<View style={[]}></View>
```
-If you want to pass custom style you can: 
```javascript
<View style={[other.style ,{padding: 10}]}></View>
```


# Style DOC
**SIZE**

**COLOR**
### Color Palettes

**Blue**
```
const blue = {
  _50: ![#61ace2](https://via.placeholder.com/15/61ace2/000000?text=+) `#61ace2`
  _100: ![#3c78df](https://via.placeholder.com/15/3c78df/000000?text=+) `#3c78df`
  _200: ![#1d63db](https://via.placeholder.com/15/1d63db/000000?text=+) `#1d63db`
  _300: ![#155ad0](https://via.placeholder.com/15/155ad0/000000?text=+) `#155ad0`
  _400: ![#0f4ec7](https://via.placeholder.com/15/0f4ec7/000000?text=+) `#0f4ec7`
  _500: ![#0040b3](https://via.placeholder.com/15/0040b3/000000?text=+) `#0040b3`
  _600: ![#003b9e](https://via.placeholder.com/15/003b9e/000000?text=+) `#003b9e`
  _700: ![#003587](https://via.placeholder.com/15/003587/000000?text=+) `#003587`
  _800: ![#002768](https://via.placeholder.com/15/002768/000000?text=+) `#002768`
  _900: ![#001b4f](https://via.placeholder.com/15/001b4f/000000?text=+) `#001b4f`
}
```
----------------------
**Red**
```
const red = {
  _50: ![#eeb2b2](https://via.placeholder.com/15/eeb2b2/000000?text=+) `#eeb2b2`
  _100: ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `#ff0000`
  _200: ![#d70000](https://via.placeholder.com/15/d70000/000000?text=+) `#d70000`
  _300: ![#c60000](https://via.placeholder.com/15/c60000/000000?text=+) `#c60000`
  _400: ![#b70000](https://via.placeholder.com/15/b70000/000000?text=+) `#b70000`
  _500: ![#9b0000](https://via.placeholder.com/15/9b0000/000000?text=+) `#9b0000`
  _600: ![#770000](https://via.placeholder.com/15/770000/000000?text=+) `#770000`
  _700: ![#5c0000](https://via.placeholder.com/15/5c0000/000000?text=+) `#5c0000`
  _800: ![#3f0000](https://via.placeholder.com/15/3f0000/000000?text=+) `#3f0000`
  _900: ![#1f0000](https://via.placeholder.com/15/1f0000/000000?text=+) `#1f0000`
}
```
--------------------

**FONT SIZE**

**FONT COLOR**

**MARGIN**

**PADDING**


**FLEX**
```javascript
import { atomic, flexRow, flexColumn } from './style/alignment/flex/display';

//applies flex-direction: "row" to the View
<View style={[atomic.flexRow]}></View>
```

### atomic 

| name           |
|----------------|
| f1             |
| flex           |
| fRow           |
| fCol           |
| fWrap          |
| justifyCenter  |
| justifyBetween |
| justifyAround  |
| alignCenter    |
| alignStart     |
| alignEnd       |
| alignStretch   |
| wrap           |
| nowrap         |


### flexRow
```javascript
<View style={[flexRow.justifyCenterAlignCenter]}></View>
```

| Rule Name                  | main axis (X)                 | cross axis (Y)         |
|----------------------------|-------------------------------|------------------------|
| justifyCenterAlignCenter   | justifyContent: center        | alignItems: center     |
| justifyCenterAlignStart    | justifyContent: center        | alignItems: flex-start |
| justifyCenterAlignEnd      | justifyContent: center        | alignItems: flex-end   |
| justifyCenterAlignStretch  | justifyContent: center        | alignItems: stretch    |
|                            |                               |                        |
| justifyBetweenAlignCenter  | justifyContent: space-between | alignItems: center     |
| justifyBetweenAlignStart   | justifyContent: space-between | alignItems: flex-start |
| justifyBetweenAlignEnd     | justifyContent: space-between | alignItems: flex-end   |
| justifyBetweenAlignStretch | justifyContent: space-between | alignItems: stretch    |
|                            |                               |                        |
| justifyAroundAlignCenter   | justifyContent: space-around  | alignItems: center     |
| justifyAroundAlignStart    | justifyContent: space-around  | alignItems: flex-start |
| justifyAroundAlignEnd      | justifyContent: space-around  | alignItems: flex-end   |
| justifyAroundAlignStretch  | justifyContent: space-around  | alignItems: stretch    |

### flexColumn
```javascript
<View style={[flexColumn.justifyBetweenAlignStart]}></View>
```
| Rule Name                  | main axis (Y)                 | cross axis (X)         |
|----------------------------|-------------------------------|------------------------|
| justifyCenterAlignCenter   | justifyContent: center        | alignItems: center     |
| justifyCenterAlignStart    | justifyContent: center        | alignItems: flex-start |
| justifyCenterAlignEnd      | justifyContent: center        | alignItems: flex-end   |
| justifyCenterAlignStretch  | justifyContent: center        | alignItems: stretch    |
|                            |                               |                        |
| justifyBetweenAlignCenter  | justifyContent: space-between | alignItems: center     |
| justifyBetweenAlignStart   | justifyContent: space-between | alignItems: flex-start |
| justifyBetweenAlignEnd     | justifyContent: space-between | alignItems: flex-end   |
| justifyBetweenAlignStretch | justifyContent: space-between | alignItems: stretch    |
|                            |                               |                        |
| justifyAroundAlignCenter   | justifyContent: space-around  | alignItems: center     |
| justifyAroundAlignStart    | justifyContent: space-around  | alignItems: flex-start |
| justifyAroundAlignEnd      | justifyContent: space-around  | alignItems: flex-end   |
| justifyAroundAlignStretch  | justifyContent: space-around  | alignItems: stretch    |