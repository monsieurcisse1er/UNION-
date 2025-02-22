#### `src/screens/HomeScreen.js`
```javascript
import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Chat"
        onPress={() => navigation.navigate('Chat')}
      />
      <Button
        title="Video"
        onPress={() => navigation.navigate('Video')}
      />
    </View>
  );
}
```
