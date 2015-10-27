var test = require('tape');
var cat = require('..');

for (var i = 0; i < 10000; i++) {
  test('ends with c', function(assert) {
    var str = cat();
    assert.equal(str[str.length - 1], 'c', 'ends with c');
    assert.end();
  });
}
