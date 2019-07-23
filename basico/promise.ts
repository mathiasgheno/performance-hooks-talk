import {
    performance,
    PerformanceObserver
} from 'perf_hooks';

const asyncFn = () => {
    performance.mark('A');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('olá');
            performance.mark('B');
            performance.measure('teste', 'A', 'B');
            resolve()
        }, 2000);
    });
};

const obs = new PerformanceObserver(list => {
    const entry = list.getEntries()[0];
    console.log(`Time for ('${entry.name}')`, entry.duration);
});

obs.observe({entryTypes: ['measure'], buffered: false});

asyncFn()
    .then(() => {
        console.log('foi');
    });

