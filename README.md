<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=1zaKS3ZOVpeVEY2xcwZmUhdYuRBGBzZRR" alt="logo"/>
</div>

## Table of contents

- [About](#About)
- [Installation](#Installation)
- [StyleCore](#StyleCore)
- [StyledAtom](#StyledAtom)
- [More](#More)
- [API](#API)

## About

`styled-atom` is a CSS in JS React library designed for managing styles dynamically in your projects.
It allows you to load styles asynchronously, and track their state.

## Installation

Install the library using the following command:

```bash
npm install styled-atom
```

## StyleCore

`StyleCore` is the foundation of the `styled-atom` library. It initializes the system and ensures styles are properly loaded. Place this component at the root of your application.

### Props:

- **path (required):**
  A function that dynamically imports CSS files. It should return a `Promise` that resolves to the desired CSS file.
- **watch (optional):**
  If `true`, monitors the style states via `sessionStorage`.

### Example:

```typescript
import React from "react";
import { StyleCore } from "styled-atom";

const App = () => (
  <>
    <StyleCore
      watch
      path={(name: string) => import(`../src/style/css/${name}.css`)}
    />
    <YourComponent />
  </>
);
```

## StyledAtom

`StyledAtom` is used to apply styles dynamically. It can wrap your components and render them only when all the specified styles are loaded.

### Props:

- **fileNames (required):**
  An array of CSS file names to load dynamically.
- **encap (optional):**
  A boolean or string value for encapsulating styles using CSS file names as classes with support for custom classes.
  Encap adds a `div` `wrapper with style file name classes` and a custom `atom-shell` attribute, matching the `atom` attribute of the style tag.
- **fallback (optional):**
  A React element to render while styles are loading.
- **onLoad (optional):**
  A callback triggered when styles are loaded. Receives a boolean indicating the success of the operation.

### Example:

```typescript
import React from "react";
import { StyledAtom } from "styled-atom";

const YourComponent = () => (
  <>
    <StyledAtom
      fileNames={["your-style1", "your-style2"]}
      onLoad={(loaded: boolean) => console.log(`Styles loaded: ${loaded}`)}
      fallback={<div>Loading...</div>}
      encap // or encap="additionalClass"
    >
      <SomeComponent />
    </StyledAtom>
  </>
);
```

## More

After the styles are loaded, you will see:

### In the Browser:

```html
<head>
  <style atom="✦:r0:" name="yourStyle1">
    .yourStyle1 {
      /* encapsulated CSS content */
    }
  </style>
  <style atom="✦:r0:" name="yourStyle2">
    .yourStyle2 {
      /* encapsulated CSS content */
    }
  </style>
</head>
<body>
  <div atom-shell="✦:r0:" class="yourStyle1 yourStyle2">
    <!-- content -->
  </div>
</body>
```

✦ _Library encapsulation uses style file names to wrap CSS and html content through classes._

### In sessionStorage under ✦styledAtom✦:

```JSON
{
  "✦:r0:": {
    "encap": true // or "encap": "additionalClass"
    "fileNames": ["your-style1", "your-style2"],
    "loaded": true
  },
}
```

## API

- `StyleCore`: The component for initializing the library.
- `StyledAtom`: A component for creating style tags.
