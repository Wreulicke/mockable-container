class ProductionContainer {
  regist(key, target) {
    return target;
  }
  get(key) {
    if (key === 'Container') return () => this;
    return key;
  }
}

export default ProductionContainer;