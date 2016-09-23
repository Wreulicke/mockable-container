# mockable-container
Mockable container has only usage for mock-up.
You can try this container at low cost.

# Usage

You must instantiate container on your application.

```javascript
// yourApplication.js 
const Container=require('mockable-contaienr');

const contaienr=new Container();

module.exports = container.getExportModule();
```

Next, you must registor some component.

```javascript
// some module.js
const application = require('yourApplication')

class Foo{
  //... some implementation
  test(){
    console.log("foo")
  }
}
// Foo must has name property.
module.exports = application.ClassComponent(Foo);
```

Next, you can replace module.

```javascript
const application=require('application');
const Foo = require('module');
new Foo().test(); // foo

// TODO provide smart way
application.contaienr.reference.Foo= () => {
  test:function(){console.log('bar')}
};

new Foo().test(); // bar
```