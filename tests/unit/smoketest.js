const { describe, it } = intern.getPlugin('interface.bdd');
const { expect, assert } = intern.getPlugin('chai');

describe('smoke test', () => {
  it('stupid test', () =>{
    assert.strictEqual(true, true, 'Yes, this works');
  })
})
  