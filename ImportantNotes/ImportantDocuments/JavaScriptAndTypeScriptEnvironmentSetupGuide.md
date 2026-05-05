# JavaScript & TypeScript Environment Setup Guide

This guide will help you, especially if you are a beginner, to check if the required tools (Node.js, npm, TypeScript) are already on your computer and how to install them if they are not. We will cover **Windows, macOS, and Linux**.

## Table of Contents

1.  [Prerequisites: The Command Line](#prerequisites-the-command-line)
2.  [Part 1: Checking for JavaScript (Node.js & npm)](#part-1-checking-for-javascript-nodejs--npm)
    - [Windows (Command Prompt, PowerShell, Git Bash)](#windows-cmd-powershell-git-bash)
    - [macOS & Linux](#macos--linux-terminal)
3.  [Part 2: How to Install Node.js (and npm)](#part-2-how-to-install-nodejs-and-npm)
    - [Option A: Official Installer (Easiest for Beginners)](#option-a-official-installer-easiest-for-beginners)
    - [Option B: Manual Setup (Advanced)](#option-b-manual-setup-advanced)
4.  [Part 3: Checking for TypeScript](#part-3-checking-for-typescript)
    - [Windows, macOS & Linux](#all-platforms-checking-for-typescript)
5.  [Part 4: Installing TypeScript Globally](#part-4-installing-typescript-globally)
6.  [Official Resources & References](#official-resources--references)

---

## Prerequisites: The Command Line

To follow this guide, you need to open a terminal application:

- **Windows:** `Command Prompt` (cmd), `PowerShell`, or `Git Bash`.
- **macOS:** `Terminal` (found in Applications > Utilities).
- **Linux:** `Terminal` (usually `Ctrl + Alt + T`).

## Part 1: Checking for JavaScript (Node.js & npm)

JavaScript itself usually runs in browsers, but to run JavaScript code on your machine (for backend development, React, Angular, Vue, or TypeScript), you need **Node.js**. Node.js comes with **npm** (Node Package Manager), which is required to install packages like TypeScript .

### Windows (CMD, PowerShell, Git Bash)

Type the following commands one by one and press **Enter**:

```bash
node -v
npm -v
```

- **If you see a version number** (e.g., `v20.10.0` or `10.2.3`): You have Node.js and npm installed.
- **If you see `'node' is not recognized...` or `command not found`**: You need to install Node.js (go to Part 2).

### macOS & Linux (Terminal)

Open your Terminal and type the same commands:

```bash
node -v
npm -v
```

- **If you see a version number**: You are ready to go.
- **If you see `command not found`**: Proceed to Part 2 to install Node.js.

## Part 2: How to Install Node.js (and npm)

There are multiple ways to install Node.js. The easiest method for beginners is using the official installer. The recommended method for developers is using a **Version Manager** (like `nvm`), as it prevents permission errors and allows switching between Node versions easily .

### Option A: Official Installer (Easiest for Beginners)

1.  **Download**:
    - Go to the official Node.js website: [https://nodejs.org/en](https://nodejs.org/en) 
    - **Tip:** Download the **LTS (Long Term Support)** version. It is the most stable.
2.  **Install**:
    - **Windows**: Run the downloaded `.msi` file. Follow the setup wizard (click "Next" through all steps). It automatically sets up your system PATH.
    - **macOS**: Run the downloaded `.pkg` file and follow the instructions.
    - **Linux**: It is better to use the package manager or the NodeSource installer (see below), but you can download the binaries from the website.
3.  **Restart:** Close your terminal and reopen it.
4.  **Verify:** Run `node -v` and `npm -v` again to confirm the installation.

### Option B: Using a Version Manager (Recommended for professionals)

Version managers solve permission issues (`sudo` headaches on Mac/Linux) and make it easy to switch Node versions .

- **For Windows:** Install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
- **For macOS/Linux:** Use `nvm` (Node Version Manager).

**Installation steps for macOS/Linux:**
```bash
# 1. Install nvm (copy this command into your terminal)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 2. Restart your terminal, then install Node
nvm install --lts
```

**Manual Installation (Advanced):** If you prefer not to use installers, you can download the binaries, extract them, and add the `bin` folder manually to your system's `PATH` .

### Summary Table for Downloads

| Operating System | Installer Type | Download Source |
| :--- | :--- | :--- |
| **Windows** | `.msi` Installer | [nodejs.org](https://nodejs.org/en)  |
| **macOS** | `.pkg` Installer | [nodejs.org](https://nodejs.org/en)  |
| **Linux** | Package Manager | [NodeSource](https://github.com/nodesource/distributions) (Recommended) or nodejs.org  |

## Part 3: Checking for TypeScript

TypeScript is a package that you install via `npm`. Once installed, it provides a command called `tsc` (TypeScript Compiler) to convert `.ts` files into `.js` files .

You can follow these steps on **Windows, macOS, and Linux** (the commands are identical).

### All Platforms: Checking for TypeScript

1.  Open your terminal (Command Prompt, PowerShell, Terminal, or Git Bash).
2.  Type the following command:

    ```bash
    tsc -v
    ```
    or
    ```bash
    tsc --version
    ```

**What the result means:**

1.  **If you see a version number (e.g., `Version 5.3.2`):** Great news! TypeScript is already installed globally on your computer .
2.  **If you see `'tsc' is not recognized...` or `command not found`:** TypeScript is **not** installed globally. You need to install it (Part 4).
    - *Note:* If you are in a specific project folder, it might be installed locally. You can check locally with `npx tsc -v`, but for system-wide use, we install globally.

## Part 4: Installing TypeScript Globally

To make the `tsc` command available anywhere in your terminal, you need to install TypeScript **globally** using the `-g` flag.

**One Command Installation for ALL Machines:**

Copy this command into your terminal and press Enter:

```bash
npm install -g typescript
```

**Permission Issues (sudo) on macOS/Linux:** 

if you get a permission error (EACCES) on macOS or Linux, you do not have write access to the global directories. To fix this temporarily, you can use `sudo` (not recommended for security), or switch to using a Node Version Manager. If you use sudo, run:

```bash
sudo npm install -g typescript
```

**Verification:**

After the installation finishes, run the check command again:

```bash
tsc -v
```

You should now see the latest TypeScript version number.

## Official Resources & References

Always refer to the official documentation for the most up-to-date information.

| Tool | Official Source | Purpose |
| :--- | :--- | :--- |
| **Node.js & npm** | [nodejs.org](https://nodejs.org/) | Official website for downloads and docs  |
| **npm Docs** | [docs.npmjs.com](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) | Installation guide for different OS  |
| **TypeScript** | [typescriptlang.org](https://www.typescriptlang.org/) | Official language website  |
| **TypeScript GitHub** | [github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript) | Source code and nightly builds  |
| **VS Code** | [code.visualstudio.com](https://code.visualstudio.com/) | The recommended editor for TypeScript  |

### Summary Cheatsheet

To quickly check your environment, copy and paste these commands into your terminal:

```bash
# Check Node
node -v

# Check npm
npm -v

# Check TypeScript
tsc -v

# If TypeScript is missing, install it
npm install -g typescript
```