export { MexcFuturesSDK as MexcFuturesClient } from "./client";
export type { MexcFuturesSDKConfig as MexcFuturesClientConfig } from "./client";

// Export WebSocket client
export { MexcFuturesWebSocket } from "./websocket";
export type {
  WebSocketConfig,
  FilterParams,
  WebSocketMessage,
} from "./websocket";

// Export types
export * from "./types/orders";
export * from "./types/account";
export * from "./types/market";
export * from "./utils/headers";
