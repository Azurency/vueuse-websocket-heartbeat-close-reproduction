# vueuse-websocket-heartbeat-close-reproduction

1. Launch ws server
```sh
node wsserver.js
```

2. Launch vue app
```sh
pnpm dev
```

3. Check that the connection is OK
4. Stop the ws server
5. Watch the ws connection not beeing retried up to the number of retries

