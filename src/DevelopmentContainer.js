class DevelopmentContainer {
  constructor() {
    // SHOULD BE WeakMap ?
    this.reference = {};
    this.regist('Container', () => this);
  }
  regist(key, target) {
    this.validateKey(key);
    if (this.reference[key] != null)
      throw new Error(`already regist:${key}`);
    this.reference[key] = target;
    return key;
  }
  validateKey(key) {
    if (typeof key !== 'string') {
      throw new Error(`key must be string, found ${key}`);
    }
    if (key === '') {
      console.warn('key should not be empty');
    }
  }
  get(key) {
    this.validateKey(key);
    return this.reference[key];
  }
}

module.exports = DevelopmentContainer;