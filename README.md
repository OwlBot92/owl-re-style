
# React Library Template without CRA Template

### Before publish change name inside package.json in order to avoid conflicts with other npm libraries

- To build your package run: `npm run compile`
- To publish to NPM login into your account and run: `npm publish`
- npm i fathom-react-components **or** yarn add fathom-react-components
- import { Button } from 'the-name-you-chose';

** N.B. remember to increase version inside package.json before each publish **

-------

**If:**
ERR! code ENOENT
ERR! syscall rename ... etc

delete node_modules
delete package-lock.json
npm install