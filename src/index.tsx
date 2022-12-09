import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from "/Users/klaudia/my-app/src/App";

const rootElement = document.getElementById('root');
createRoot(rootElement!).render(<App />);
