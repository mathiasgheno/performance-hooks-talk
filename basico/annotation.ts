import {
    performance,
    PerformanceObserver
} from 'perf_hooks';

function measurePerformance(target, key, descriptor){
    const originalFn = descriptor.value;
    descriptor.value = () => {
        performance.mark('A');
        return originalFn()
            .then(() => {
                performance.mark('B');
                performance.measure(key, 'A', 'B');
            });
    };
    return descriptor;
}

class AnnotationExample {

    @measurePerformance
    asyncFn(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    };
}

const obs = new PerformanceObserver(list => {
    const entry = list.getEntries()[0];
    console.log(`Time for ('${entry.name}')`, entry.duration);
});

obs.observe({entryTypes: ['measure']});

new AnnotationExample().asyncFn();

