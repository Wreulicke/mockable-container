const DevelopmentContainer = require('./DevelopmentContainer');

const ContainerFactory = function() {
  if( (process.env.NODE_ENV === 'production') ) {
    return;
  } else {
    return new DevelopmentContainer();
  }
};

class Container {
  constructor() {
    this.initialize();
  }
  initialize() {
    this.container = ContainerFactory();
  }
  registorComponent(container) {
    return (key) => (target) => {
      const record = container.regist(key, target);
      return (...args) => (container.get('Container')().get(record))(...args);
    };
  }
  getExportModule() {
    const container = this.container;
    const Component = (key) => (process.env.NODE_ENV === 'production') ? target => target : this.registorComponent(container)(key);
    const FunctionComponent = (target) => (process.env.NODE_ENV === 'production') ? target : Component(target.name)(target);
    const ClassComponent = (target) => (process.env.NODE_ENV === 'production') ? target : Component(target.name)((...args) => new target(...args));
    return {
      container,
      Component,
      FunctionComponent,
      ClassComponent
    };
  }
}

module.exports = Container;