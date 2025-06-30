# MEXC Futures SDK 🌟

![MEXC Futures SDK](https://img.shields.io/badge/MEXC_Futures_SDK-v1.0.0-blue.svg)  
![GitHub Release](https://img.shields.io/github/release/DeclanKnowsLinux12345/mexc-futures-sdk.svg)  
![License](https://img.shields.io/badge/License-MIT-green.svg)  
![Node.js](https://img.shields.io/badge/Node.js-14.x%2B-brightgreen.svg)  

Welcome to the **MEXC Futures SDK** repository! This TypeScript SDK allows you to interact seamlessly with the MEXC Futures API using browser session tokens. It offers robust support for both REST and WebSocket, enabling efficient trading operations.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Reference](#api-reference)
6. [Examples](#examples)
7. [Contributing](#contributing)
8. [License](#license)
9. [Links](#links)

## Introduction

The MEXC Futures SDK is designed for developers looking to build trading applications on the MEXC Futures platform. With a focus on simplicity and efficiency, this SDK allows you to bypass maintenance mode using browser session tokens. Whether you are building a trading bot or a custom trading interface, this SDK provides the tools you need.

## Features

- **TypeScript Support**: Built with TypeScript for type safety and better developer experience.
- **Browser Session Tokens**: Use your existing session tokens to authenticate API requests.
- **REST API Support**: Access market data, manage orders, and more through RESTful endpoints.
- **WebSocket Support**: Receive real-time updates on market data and order status.
- **Bypass Maintenance Mode**: Trade even when the platform is under maintenance.
- **Easy to Use**: Simple methods and clear documentation make integration straightforward.

## Installation

To install the MEXC Futures SDK, you can use npm or yarn. Run the following command in your terminal:

```bash
npm install mexc-futures-sdk
```

or 

```bash
yarn add mexc-futures-sdk
```

Make sure you have Node.js version 14.x or higher installed. 

## Usage

After installing the SDK, you can start using it in your TypeScript project. Here's a basic example of how to set it up:

```typescript
import { MEXCFuturesSDK } from 'mexc-futures-sdk';

const sdk = new MEXCFuturesSDK({
    sessionToken: 'YOUR_SESSION_TOKEN'
});

// Example: Get market data
sdk.getMarketData('BTC_USDT').then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
```

Replace `'YOUR_SESSION_TOKEN'` with your actual session token.

## API Reference

The MEXC Futures SDK exposes several methods for interacting with the API. Here are some of the key methods:

### `getMarketData(symbol: string)`

Fetches the latest market data for the specified trading pair.

**Parameters**:
- `symbol`: The trading pair symbol (e.g., 'BTC_USDT').

**Returns**: A promise that resolves to the market data.

### `placeOrder(orderDetails: OrderDetails)`

Places a new order on the MEXC Futures platform.

**Parameters**:
- `orderDetails`: An object containing order parameters (e.g., price, quantity, side).

**Returns**: A promise that resolves to the order confirmation.

### `subscribeToMarketUpdates(symbol: string)`

Subscribes to real-time market updates for the specified trading pair.

**Parameters**:
- `symbol`: The trading pair symbol.

**Returns**: A WebSocket connection that provides market updates.

## Examples

### Fetching Market Data

```typescript
sdk.getMarketData('ETH_USDT').then(data => {
    console.log('Market Data:', data);
}).catch(error => {
    console.error('Error fetching market data:', error);
});
```

### Placing an Order

```typescript
const orderDetails = {
    symbol: 'BTC_USDT',
    price: 50000,
    quantity: 0.1,
    side: 'buy'
};

sdk.placeOrder(orderDetails).then(response => {
    console.log('Order placed:', response);
}).catch(error => {
    console.error('Error placing order:', error);
});
```

### Subscribing to Market Updates

```typescript
const ws = sdk.subscribeToMarketUpdates('LTC_USDT');

ws.on('message', message => {
    console.log('Market Update:', message);
});
```

## Contributing

We welcome contributions to the MEXC Futures SDK! If you have ideas for improvements or new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request.

Please ensure that your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

For more information, check the [Releases](https://github.com/DeclanKnowsLinux12345/mexc-futures-sdk/releases) section to download the latest version and see updates.

You can also visit the [Releases](https://github.com/DeclanKnowsLinux12345/mexc-futures-sdk/releases) page for more details.

---

Thank you for checking out the MEXC Futures SDK! We hope you find it useful for your trading applications. If you have any questions or feedback, feel free to reach out. Happy trading!