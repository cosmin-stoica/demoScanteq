// sharedStateManager.js

let workers = [];

self.addEventListener('connect', (event) => {
  const port = event.ports[0];

  port.addEventListener('message', (event) => {
    const { type, payload } = event.data;

    switch (type) {
      case 'ADD_WORKER':
        workers.push(payload);
        break;
      case 'GET_WORKERS':
        port.postMessage(workers);
        break;
      default:
        break;
    }
  });

  port.start();
});
