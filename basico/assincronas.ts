import {
    performance,
    PerformanceObserver
} from 'perf_hooks';

const asyncFn = (done) => {
    performance.mark('A');
    setTimeout(() => {
        console.log('olá');
        performance.mark('B');
        performance.measure('teste', 'A', 'B');
        done();
    }, 2000);
};

const obs = new PerformanceObserver(list => {
    const entry = list.getEntries()[0];
    console.log(`Time for ('${entry.name}')`, entry.duration);
});

obs.observe({entryTypes: ['measure']});

asyncFn(() => {
    console.log('foi');
});

