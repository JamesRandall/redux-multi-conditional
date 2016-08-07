
# redux-multi-conditional

Conditionally dispatch multiple actions from one action creator

## Installation

    $ npm install redux-multi-conditional --save

## Usage

Installing the middleware:

```javascript
import multiConditionalMiddleware from 'redux-multi-conditional'
import {createStore, applyMiddleware} from 'redux'

applyMiddleware(multiConditionalMiddleware)(createStore)
```

Using it:

```javascript
import { ConditionalAction } from '../helpers/ConditionalAction.js'

function doSomething () {
  return [
    new ConditionalAction((state) => state.isActive, { type: 'WHEN_ACTIVE' }),
    new ConditionalAction((state,initialState) => state.total != initialState.total, { type: 'TOTAL_CHANGED' }),
    { type: 'ALWAYS_RUN' }
  ]
}
```

This will enumerate the the actions in order dispatching them when the conditional function returns true.

## Thanks

Thanks to the author of Redux itself and the redux-multi middleware which I used as an exemplar for building a Redux middleware package

## License

The MIT License

Copyright &copy; 2016, James Randall

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
