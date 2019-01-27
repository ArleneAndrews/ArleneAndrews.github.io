const {describe, it} = intern.getPlugin('interface.bdd');
const {  expect,  assert} = intern.getPlugin('chai');

describe('Framework test', () => {
  it('Basic asssert', () => {
    assert.strictEqual(true, true, 'Yes, this is wrong');
  });
})