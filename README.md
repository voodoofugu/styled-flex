# ✦ styled-atom ✦

## Table of contents

- [About](#About)
- [Installation](#Installation)
- [StyleCore](#StyleCore)
- [StyledAtom](#StyledAtom)
- [API](#API)

## About

It is a lightweight React library for working with CSS in JS.

## Installation

Install the library using the following command:

```bash
npm install styled-atom
```

## StyleCore

After installing the library, you need to use the Style Core component at the top level of your project by passing the path to the folder with the style files to the path through the call function.
You can also pass an optional `watch` parameter to `StyleCore`, which will allow you to monitor `style-atom` data in the `sessionStorage`:

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

You will see these style tags in the browser:

```
<style atom="✦0" name="yourStyle1">/</style>
<style atom="✦0" name="yourStyle2">/</style>
```

🔮 _All the names of your CSS files will be converted to camelCase._

## StyledAtom

Now, after mounting `StyleCore`, you can use `StyledAtom`. Just passing the file names to the `fileNames` array:

```javascript
import React from 'react';
import { StyledAtom } from "styled-atom";

const YourComponent = () => {
  return {
    <>
      <StyledAtom fileNames={["your-style1", "your-style2"]} />
      <SomeComponent />
    </>
  };
};
```

`StyledAtom` can be used as a wrapper for your content, which will be rendered only after the transferred style files are fully loaded.
You can also pass your upload element to the `fallback`.
Another `StyledAtom` includes a callback function that is executed after the download of the style files is completed:

```typescript
const YourComponent = () => {
  return {
    <>
      <StyledAtom
        fileNames={["yourStyle1", "yourStyle2"]}
        fallback={<div>Loading...</div>}
        onLoad={
          (loaded: boolean) => { console.log(`StyledAtom is loaded: ${loaded}`); }
        }
      >
        <SomeComponent />
      </StyledAtom>
    </>
  };
};
```

## API

- `StyleCore`: The component for initializing the library.
- `StyledAtom`: A component for creating style tags.
