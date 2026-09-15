# Neurogine Mobile Assessment - Product Catalog & Details App

A production-grade React Native application engineered with a **Modular Micro-Module Architecture**. Built to simulate enterprise-level mobile development, this project decouples feature modules, core network layers, shared UI design systems, and state management into independent repositories to ensure scalability, clean boundaries, and maximum reusability.

---

## 🏛️ Project Architecture & Module Ecosystem

This application is built using a **Modular Architecture (Multi-Repository Ecosystem)**. Each layer is strictly decoupled to ensure code isolation and maintain UI/UX consistency across the entire application.

### Main Application
* **[Neurogine App](https://github.com/aaridwann/neurogine-root)**: The primary application root runner that links all feature modules, manages main navigation, and handles global state integration.

### Feature Modules
* **[neurogine-catalog-product](https://github.com/aaridwann/neurogine-catalog-product)**: Independent feature module for displaying the product catalog list (Main/First Screen).
* **[neurogine-details-product](https://github.com/aaridwann/neurogine-details-product)**: Independent feature module for displaying detailed product information.

### Core & Shared Infrastructure
* **[neurogine-root](https://github.com/aaridwann/neurogine-root)**: Root module for general application-wide components (such as Global Snackbar/Toast, Base Providers, and shared Utilities).
* **[neurogine-core-network](https://github.com/aaridwann/neurogine-core-network)**: Centralized Core Network Layer built on **Axios** & **TanStack Query** for API requests, caching, and error handling.

### Design System / UI-Kit
* **[neurogine-ui-kit-button](https://github.com/aaridwann/neurogine-ui-kit-button)**: Atomic UI Component specifically for Buttons to guarantee consistent interaction & design across all features.
* **[neurogine-ui-kit-general-text](https://github.com/aaridwann/neurogine-ui-kit-general-text)**: Typography Design System for standardizing text variants, font weights, and scaling.

---

## 🌟 Senior-Level Engineering Highlights

* **Strict Modular Separation:** Each feature exists as an independent library/module, enabling parallel team workflows and seamless codebase scaling.
* **Automated Package & iOS Native Patching:** Automated **Makefile** integration (`yarn setup`) handles `patch-package`, native build cache clearing, and `pod install` sequentially without race conditions.
* **State & Server Data Synchronization:** Combination of **Redux Toolkit** for internal app state and **TanStack Query (React Query)** for asynchronous server-state caching.
* **Polished Micro-Interactions & Assets:** Enhanced with a custom **App Icon**, native **Splash Screen**, and smooth micro-animations powered by **React Native Reanimated**, **Gesture Handler**, and **Lottie Animation**.
* **High Code Quality Standard:** Enforced strict ESLint configuration, prevented type leaks with TypeScript, and integrated unit testing via **Jest** & **React Native Testing Library**.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | React Native, TypeScript |
| **Architecture** | Modular Repositories, Atomic UI Design System |
| **State Management** | Redux Toolkit, TanStack Query (React Query) |
| **Networking** | Axios (Centralized in `neurogine-core-network`) |
| **Navigation** | React Navigation (Native Stack) |
| **Animations & UI** | Reanimated, Gesture Handler, Lottie React Native |
| **Testing & Tooling** | Jest, React Native Testing Library, ESLint, Makefile |

---

## 🚀 Quick Start & Installation

### Prerequisites
Ensure your React Native development environment (Xcode for iOS / Android Studio for Android) is properly configured on your system.

### 1. Setup Dependencies & Native Modules
Run this single command at the root of the project to download dependencies, apply patches, clean iOS build caches, and execute `pod install` automatically:

```bash
yarn setup
```

### 2. Build & Run App
Open a new terminal window and run your desired target OS:

OS Simulator:
```bash
yarn ios
```
OS Android:
```bash
yarn android
```

### 3. Start Metro Bundler (If Not Running)
If Metro does not launch automatically, run the following command at the root of your project to start the development server:
```bash
yarn start
```

📊 Quality Assurance & Testing
Bash
# Run Unit Tests
yarn test

# Generate Test Coverage Report
yarn test --coverage

# Run Linter
yarn lint

# TypeScript Verification / Build Check
yarn build

## 📋 Project Roadmap & Todo List
Completed Features & Enhancements
* Initial project setup & Multi-Repo modularization

* Integration of Redux Toolkit & React Navigation

* Integration of React Native Reanimated & Gesture Handler

* Integration of Lottie Animation for micro-interactions

* Centralized Networking with Axios & TanStack Query

* UI-Kit Implementation (General Text & Button System)

* Feature Implementation: Product List & Product Details

* Custom Native App Icon & Native Splash Screen

* Automated Setup via Makefile (yarn setup)

## 📋 Ongoing & Upcoming Tasks
- **Shared Navigation & Route Module**: Centralize navigation routes, action types, and constants across feature modules
-  **Fix Types**: Reduce remaining Type Warnings/Any to < 20%
- **Increase Test Coverage**: Elevate unit test coverage from 80% to > 90%
- **Environment Module**: Implement .env module for dynamic API Base URL parameterization & App Configurations
- **Configuration Layer**: Centralize app-wide configuration constants

# 📜 Git Commit History & Timeline

### Development Log for Neurogine Mobile Engineer Assessment

| No. | Date & Time | Commit Hash | Commit Message |
| :---: | :--- | :---: | :--- |
| 1 | Tue Sep 15 17:40:10 2026 +0700 | `df9b094` | `feat(product-detail): [neurogine-assessment] add readme` |
| 2 | Tue Sep 15 17:05:38 2026 +0700 | `d573bb9` | `feat(product-detail): [neurogine-assessment] finalize code` |
| 3 | Tue Sep 15 14:55:13 2026 +0700 | `cd4fb13` | `feat(product-detail): [neurogine-assessment] setup lint and unit test` |
| 4 | Tue Sep 15 14:52:22 2026 +0700 | `7e64b1d` | `feat(product-detail): [neurogine-assessment] setup lint and unit test` |
| 5 | Tue Sep 15 13:59:53 2026 +0700 | `13d38c5` | `feat(product-detail): [neurogine-assessment] update package` |
| 6 | Mon Sep 14 19:20:50 2026 +0700 | `4be7b5a` | `feat(product-detail): [neurogine-assessment] add app icon ios` |
| 7 | Mon Sep 14 19:04:02 2026 +0700 | `be7e554` | `feat(product-detail): [neurogine-assessment] add splash screen` |
| 8 | Mon Sep 14 14:57:30 2026 +0700 | `792d28b` | `feat(product-detail): [neurogine-assessment] setup dependency redux snackbar` |
| 9 | Sat Sep 12 02:07:15 2026 +0700 | `4da10a2` | `feat(init-seeds): [neurogine-xxx] add patch` |
| 10 | Fri Sep 11 19:53:08 2026 +0700 | `f799879` | `feat(init-seeds): [neurogine-xxx] add todo list` |
| 11 | Fri Sep 11 02:37:10 2026 +0700 | `5afa6f3` | `feat(init-seeds): [neurogine-xxx] initial main app` |
| 12 | Thu Sep 10 18:00:03 2026 +0700 | `7b8f79b` | `Initial commit (Generated by react-native@0.87.1)` |


Designed & Developed for Neurogine Mobile Engineer Assessment by Ridwan Firmansyah.