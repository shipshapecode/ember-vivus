import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import vivus from 'vivus';

module('Acceptance | vivus shim', function(hooks) {
  setupApplicationTest(hooks);

  test('testing shim import', function(assert) {
    assert.ok(vivus !== undefined && vivus !== null);
    assert.equal(vivus.toString().substr(0, 42), 'function Vivus(element, options, callback)');
  });
});
