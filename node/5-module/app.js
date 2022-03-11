// import {increase, getCount} from './counter.js' // or
import * as counter from './counter.js'

let i = 0;

for (i = 0; i < 10; i++) {
    counter.increase();
    counter.getCount();
}
