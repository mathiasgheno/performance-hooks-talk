import {
    performance,
    PerformanceObserver
} from 'perf_hooks';

const arrayDeAnimais = ['cachorro', 'gato', 'cavalo'];

const comForEach = array => array.forEach(animal => console.log(animal));
const comForOf = array => {
    for (const animal of array){
        console.log(animal);
    }
};


const forEach = performance.timerify(comForEach);
const forForOf = performance.timerify(comForOf);

const obs = new PerformanceObserver(list => {
    console.log(list.getEntries());
});

obs.observe({entryTypes: ['function'], buffered: true});

forEach(arrayDeAnimais);
forForOf(arrayDeAnimais);
