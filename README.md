# Colorphoria 🎨

Colorphoria is a vibrant and interactive color palette generator that allows users to explore beautiful color schemes with ease. It uses [The Color API](https://www.thecolorapi.com/) to generate stunning palettes based on user-selected or randomly generated colors.

## 📚 How to Use

### Generating Random Color Palettes 🔀

- **Press Spacebar**
- **Press Shuffle Button**

### Generating Personalized Color Palettes 👤

1. **Pick a Base Color:** Use the color picker to select your desired "inspiration" color
2. **Choose a Generation Mode:** Select a generation mode from the dropdown selection list
3. **Generate a Palette:** Click the "Generate color palette" button

### General Use 👨‍🏫

1. **Copy a Color Swatch:** Click on any color you like to copy the HEX code to your device clipboard

## Development Roadmap 🏗️

- [x] Build out UI structure
- [x] Style and make the UI responsive
- [x] Implement basic functionality
  - [x] Random color palette generation feature
  - [x] User selected color palette generation feature
  - [x] Copy-to-clipboard feature
  - [x] Hex codes and names floating above color swatch feature

### Mind Dump for Potential Future Tasks 🧠

- [ ] Maybe implement some hardware presence so that users with a physical keyboard get a modal with a hint to press the spacebar keyboard shortcut to generate random color palettes
- [ ] Seperate color palette rendering from the API calls
- [ ] Make `getRandomGenerationMode()` more robust by looping over all possible options in the select element
- [ ] Definitely refactor the JS at some point because it's not very DRY
- [ ] Implement a cleaner UI when transitioning the project to React

## 👨‍💻 Author

- LinkedIn: [builtbytheo](https://www.linkedin.com/in/builtbytheo/)
- GitHub: [builtbytheo](https://github.com/builtbytheo)
