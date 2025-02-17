<template>
  <div>
    <h1>Websocket</h1>
    <ul>
      <li>Status: {{ status }}</li>
      <li>Data: {{ data }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket(
  'ws://localhost:8075/ws', 
  {
    heartbeat: {
      interval: 1000, // 1 second
      pongTimeout: 2000, // 2 seconds
    },
    autoReconnect: {
      retries: 100,
      delay: 1000,
      onFailed() {
        console.log('Failed to reconnect')
      },
    },
    onopen() {
      console.log('Connected')
    },
    onmessage(e) {
      console.log('Message:', e.data)
    },
    onclose() {
      console.log('Closed')
    },
    onerror(e) {
      console.log('Error:', e)
    },
  }
)
</script>
