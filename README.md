# ph-ssn

Philippine Social Security Number (SSN) utilities for Node.js/TypeScript.

## Installation

```bash
npm install ph-ssn
```

## Features

- 🔢 SSN formatting (XX-XXXXX-XXX)
- ✅ SSN validation
- 🎲 Random SSN generation (for testing)

## Usage

```typescript
import { formatSSN, validateSSN } from 'ph-ssn';

formatSSN('1234567890'); // '12-34567-890'
validateSSN('1234567890'); // true
```

## License

MIT


## API

See source code and JSDoc comments for full API documentation.
All exported functions include TypeScript types.
