import {performance} from "perf_hooks";

function measurePerformance(target, key, descriptor){
  const originalFn = descriptor.value;

  descriptor.value = function () {
    performance.mark('A');
    return originalFn
        .apply(this, arguments)
        .then((response) => {
          performance.mark('B');
          performance.measure(key, 'A', 'B')
          return response;
        });
  };

  return descriptor;
}

export {
  measurePerformance,
}