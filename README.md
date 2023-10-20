# Monkey Bubble Lol HUD Module

This module gives you control over the in-game overlay and statistics slides of Monkey Bubble LoL HUD through Bitofucs Companion v3+.

## Installation

1. Install [Companion v3](https://user.bitfocus.io/download). You should make sure that any modules you require for production have also been updated to the new v3 format.

2. Create a folder somewhere in which you will install external modules, including this one

3. Run Companion and press the developer settings cogwheel in the top right, which will show the Developer modules path box. Choose your new folder here.

![Companion Dashboard](https://raw.githubusercontent.com/wiki/bitfocus/companion-module-base/images/launcher-developer-mode.png)

4. Download this module repository into the folder you just created. You can do this by clicking the green "Code" button on the top right of this page, and then clicking "Download ZIP". Extract the ZIP file into the folder you created.

5. Install Node (v18 or higher). This installer uses the [v18 LTS](https://nodejs.org/en/blog/release/v18.12.0) version.

6. Open a command prompt window in your developer modules folder. You can do this by typing `cmd` into the address bar of the folder, or by opening a command prompt window and typing `cd <your folder path>`. You can also open a command prompt window and type `cd` followed by a space, and then drag the folder into the command prompt window.

7. Install dependencies by typing `npm install` into the command prompt window.

## Usage

Make sure your Monkey Bubble LoL HUD Server is running before starting the module.
Enter the websocket url and select a stream number in the module settings. You can ignore the topics for now. Press save to start the module.

There are a few presets you can look through to help you get started.

For more information see [HELP.md](./companion/HELP.md) and [LICENSE](./LICENSE)
