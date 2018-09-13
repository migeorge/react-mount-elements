# React Mount Elements

Quickly setup multiple React components to mount in the DOM.

This is useful in cases where you have a monolithic application and you're introducing React in specific areas instead of commiting to a SPA on the frontend. It can also be used as a quick way to mount your SPA or components while supporting props passed through from your markup.

## Installation

From master:
```
$ yarn add https://github.com/migeorge/react-mount-elements
```

## Example

widgets.js
```javascript
import reactMountElements from 'react-mount-elements'

import Calcluator from './widgets/Calculator'
import Clock from './widgets/Clock'
import Stocks from './widgets/Stocks'
import Weather from './widgets/Weather'

reactMountElements({
  'calculator-widget': Calculator,
  'clock-widget': Clock,
  'stocks-widget': Stocks,
  'weather-widget': Weather
})
```

dashboard.html
```html
<html>
  <body>
    <h1>Dashboard</h1>

    <div id="calculator-widget"></div>

    <!-- When the Clock react component renders it
         will recieve the prop timeZone with the
         value passed here. -->
    <div id="clock-widget"
         data-props-time-zone="America/New_York"></div>

    <div id="stocks-widget"></div>

    <!-- When the Weather react component renders it
         will recieve the prop location with the
         value passed here. -->
    <div id="weather-widget"
         data-props-location="New York, New York, USA"></div>

    <script type="text/javascript" src="widgets.js"></script>
  </body>
</html>
```

## License

Copyright (c) 2018 Mike George. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
