const counter = require('./counter.js');

for (i=0; i<10; i++) {
    counter.increase();
    counter.getCount();
}
