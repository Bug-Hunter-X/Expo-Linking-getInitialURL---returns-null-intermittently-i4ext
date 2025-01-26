```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = (event) => {
      setInitialUrl(event.url);
    };

    Linking.addEventListener('url', handleUrl);

    Linking.getInitialURL().then((url) => {
      setInitialUrl(url);
    });

    return () => {
      Linking.removeEventListener('url', handleUrl);
    };
  }, []);

  // ... rest of your component
  if (initialUrl) {
    // Process the deep link
    console.log('Deep link received:', initialUrl);
  }
  return (<div>Hello World</div>)
};

export default App; 
```