
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
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `#f03c15`
**Blue**
```javascript
const blue = {
  _50: `#61ace2`
  _100: ![#3c78df]
  _200: ![#1d63db]
  _300: ![#155ad0]
  _400: ![#0f4ec7]
  _500: ![#0040b3]
  _600: ![#003b9e]
  _700: ![#003587]
  _800: ![#002768]
  _900: ![#001b4f]
}
```
----------------------
**Red**
```javascript
const red = {
  _50: ![#eeb2b2]
  _100: ![#ff0000]
  _200: ![#d70000]
  _300: ![#c60000]
  _400: ![#b70000]
  _500: ![#9b0000]
  _600: ![#770000]
  _700: ![#5c0000]
  _800: ![#3f0000]
  _900: ![#1f0000]
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