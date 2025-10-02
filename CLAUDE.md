# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Yandex Algorithm Training course repository containing solutions to algorithmic problems solved in JavaScript. The repository is structured by training versions (1.0, 2.0, etc.), lectures, and problem types (ClassWork vs HomeWork).

## Architecture

### Directory Structure
- `YandexAlgoTraining_X_0/` - Version-specific training content
  - `ClassWork/` - Problems solved during lectures
  - `HomeWork/` - Take-home assignments
  - `Lecture_N/` - Organized by lecture number
    - Individual problem folders containing:
      - `main.js` - Solution implementation
      - `input.txt` - Test input data
      - `output.txt` - Expected output
      - `readme.md` - Problem description and constraints

### Code Patterns

**File I/O Convention:**
```javascript
const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
// Process input...
fs.writeFileSync('output.txt', result.toString(), 'utf8');
```

**Common Utility Functions:**
```javascript
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));
const readInt = (param) => parseFloat(param);
```

**Solution Organization:**
- Multiple solution approaches in single files (optimized versions numbered)
- Performance metrics included in comments (ms, Mb)
- Input validation with range checks (-50 to 50 for temperature problems)

## Development Notes

- All solutions are implemented in JavaScript using Node.js
- No build system or package dependencies
- Each problem is self-contained with its own test data
- Solutions often include multiple algorithmic approaches (brute force, optimized, hash table variants)
- Russian language used in problem descriptions and comments
- 
## Key Files

- `howToSolveAlgo.md`: Russian-language guide on algorithmic problem-solving techniques and approaches
- `README.md`: Our main approach for this training course 