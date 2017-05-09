Meteor integration in NativeScript using nativescript-websockets

```bash
$ tns plugin add nativescript-meteor-client
```

To init your Meteor connection and classes add this snippet just after the `platformNativeScriptDynamic` import:
```javascript
import {platformNativeScriptDynamic} from "nativescript-angular/platform";

require('nativescript-meteor-client')({
    url: 'http://127.0.0.1:3000',
    debug: true,
    timeout: 5000
}, require('nativescript-websockets'));

...
```

`debug` and `timeout` are optional.

An example application can be fount at [nativescript-ng-drawer-seed](https://github.com/ntrp/nativescript-ng2-drawer-seed/tree/meteor).