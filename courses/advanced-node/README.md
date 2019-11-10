# NodeJS: Advanced Concepts

Udemy course by Stephen Grider which delves into the innards of the only backend tool I'm confident with at the moment -- NodeJS.

## Concepts

### The Event Loop

### Threadpool

The default threadpool size in Node can be modified by placing the following at the top of the entry point of your application:

```js
// reducing default threadpool to 1
process.env.UV_THREADPOOL_SIZE = 1;

// increasing default threadpool to 6
process.env.UV_THREADPOOL_SIZE = 6;
```

### Clustering

clustering in Node can be used to spin up multiple instances of the same application

```js
const cluster = require('cluster');
cluster.fork(); // <- creates a child
```

#### ❗❗❗Note 👇🏾

Don't go overboard with creating too many forks with the idea of it helping speed up the rate at which the node app responds to requests.

A good rule of thumb -> forks should **not** be more than the underlying CPU's physical/logical cores.

#### PM2

process manager for production level clustering for node.

##### Installing

```bash
npm i -g pm2
```

or

```bash
yarn global add pm2
```

##### Start node app with pm2

using the following command, the node app would be started, handing over cluster management to pm2 in default mode (clusters would be created hugely dependent on the number of logical cores your underlying CPU has)

```bash
pm2 start <entry-point> -i 0
```

##### Helpful commands

- Show all running clusters/instances

```bash
pm2 list
```

- Show details of particular app/instance

```bash
pm2 show <id|name>
```

- Monitor processes

```bash
pm2 monit
```

- Stop running instances

```bash
pm2 delete <app-name>
```

- Docs -> [pm2.io](https://pm2.io/doc/en/runtime/overview/)

### Worker Threads

instructor advices we pay not much attention to worker thread since it's still very experimental in node but rather reach out for clustering when whatever application that is being built calls for some form of concurrency.
