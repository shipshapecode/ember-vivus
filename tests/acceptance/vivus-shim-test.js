import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import vivus from 'vivus';

moduleForAcceptance('Acceptance | vivus shim');

test('testing shim import', function(assert) {
  assert.ok(vivus !== undefined && vivus !== null);
  assert.equal(vivus.toString().substr(0, 42), 'function Vivus(element, options, callback)');
});
