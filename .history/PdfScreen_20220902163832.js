import React, {useRef} from 'react';
import PSPDFKitView from 'react-native-pspdfkit';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function PdfScreen() {
  const ref = useRef(null);

  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', async () => {
      ref.current?.destroyView();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <PSPDFKitView
        ref={ref}
        configuration={{
          thumbnailBarMode: 'scrollable',
          pageTransition: 'scrollContinuous',
          scrollDirection: 'vertical',
        }}
        style={{flex: 1, backgroundColor: 'blue'}}
        document="file:///android_asset/plan.pdf"
      />
    </View>
  );
}
