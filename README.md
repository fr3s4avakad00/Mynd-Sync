# Mynd-Sync
## Overview
The Focus Game application is a character-driven gamified productivity tool. Users can log in, customize their character, start focus sessions, and earn points for maintaining focus. Points can be spent on character customization and in-game rewards, enhancing user engagement through a fun and interactive experience.

## Folder Structure
```
.
├── focusGameMenu.html      # Main menu for starting the game or viewing instructions
├── focusGameMenu.js        # Handles menu interactions (Start Game, Instructions)
├── focusGameMenu.css       # Styles for the main menu
├── gamePage.html           # Main game page for user options (Timer, Shop)
├── gamePage.js             # Manages points display, logout, and reset functions
├── gamePage.css            # Styles for the game page
├── house.html              # Character display and item shop page
├── house.js                # Handles character display, item purchasing, and item visibility
├── house.css               # Styles for character display and shop page
├── loadGame.html           # Login page for existing users
├── loadGame.css            # Styles for login page
├── newAndLoadGame.js       # Manages user authentication (signup, login)
├── newGame.html            # Signup page for new users
├── newGame.css             # Styles for signup page
├── newHome.html            # Background customization page
├── newHome.js              # Manages background selection and points deduction
├── newHome.css             # Styles for background customization page
├── pickCharacter.html      # Character customization page
├── pickCharacter.js        # Handles character selection and storage
├── pickCharacter.css       # Styles for character customization page
├── timer.html              # Timer page for focus sessions
├── timer.js                # Manages focus session timing and point calculation
├── timer.css               # Styles for timer page
```

## Functionality Overview

### 1. **Main Menu (focusGameMenu)**
   - **HTML/CSS**: Displays buttons for starting the game or viewing instructions.
   - **JavaScript**: Handles redirection to login or instructions page.

### 2. **Login/Signup (loadGame, newGame)**
   - **HTML**: `loadGame.html` (login) and `newGame.html` (signup) provide forms for user authentication.
   - **JavaScript (newAndLoadGame.js)**:
      - Login checks credentials against `localStorage`.
      - Signup creates a user profile in `localStorage`.
   - **CSS**: Style files `loadGame.css` and `newGame.css` for login and signup pages.

### 3. **Game Page (gamePage)**
   - **HTML/CSS**: `gamePage.html` provides buttons for Timer, Shop, Log Out, and reset options. `gamePage.css` styles the layout.
   - **JavaScript (gamePage.js)**:
      - Displays points, starts focus timer, or navigates to the shop.
      - `resetUserData()` resets user points and purchases, keeping the character.
      - `resetLoggedInUser()` removes all user data, logging them out.

### 4. **Character Customization (pickCharacter)**
   - **HTML**: `pickCharacter.html` lets users select character attributes like hair, face, and body.
   - **JavaScript (pickCharacter.js)**:
      - Stores selected character attributes in `localStorage`.
   - **CSS**: `pickCharacter.css` defines the layout and look of the customization page.

### 5. **Focus Timer (timer)**
   - **HTML/CSS**: `timer.html` displays a start/stop timer and an option to end the focus session. `timer.css` styles the layout.
   - **JavaScript (timer.js)**:
      - `startTimer()` and `pauseTimer()` manage session timing.
      - `getPoints()` calculates points based on the session duration and saves them to `localStorage`.

### 6. **Background Customization (newHome)**
   - **HTML/CSS**: `newHome.html` displays options to select background images, styled by `newHome.css`.
   - **JavaScript (newHome.js)**:
      - Deducts points for background selection and saves the choice in `localStorage`.

### 7. **Shop and Character Display (house)**
   - **HTML/CSS**: `house.html` displays the character and shop items; `house.css` styles these elements.
   - **JavaScript (house.js)**:
      - Loads character visuals from `localStorage`.
      - Manages item purchases (Table, Cup Head, Coffee Cup) with `buyTable()`, `buyCupHead()`, and `buyCofeCup()` functions, which deduct points, reveal items, and save purchases to `localStorage`.

## How to Run the App
1. **Download/Clone the Repository**: Download the files or clone the repository to your local machine.
2. **Open `focusGameMenu.html`**: Start the application by opening `focusGameMenu.html` in your web browser. This serves as the main menu where users can start the game or view instructions.

## How to Use the App
1. **Sign Up or Log In**: On first use, sign up on the `newGame.html` page to create a profile. Returning users can log in via `loadGame.html`.
2. **Customize Character**: After logging in, proceed to `pickCharacter.html` to select hair, face, and body features for the character.
3. **Start Focus Session**: Navigate to `timer.html` to start a focus timer. When the session ends, points are awarded based on time spent.
4. **Earn and Spend Points**: Earn points through focus sessions and spend them on customizations like background (via `newHome.html`) and items in the shop (via `house.html`).
5. **Logout and Reset**: Users can log out or reset data on `gamePage.html` through the Log Out and Reset buttons.
