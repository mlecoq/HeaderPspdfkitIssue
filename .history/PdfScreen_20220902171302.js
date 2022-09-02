import React, {useRef} from 'react';
import PSPDFKitView from '@archireport/react-native-pspdfkit';
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
    <View style={{flex: 1}}>
      <PSPDFKitView
        style={{flex: 1, color: '#267ad4'}}
        ref={ref}
        configuration={{
          pageTransition: 'scrollContinuous',
          pageScrollDirection: 'vertical',
          documentLabelEnabled: true,
          pageMode: 'single',
          showPageNumberOverlay: true,
          fitPageToWidth: true,
        }}
        fragmentTag="test"
        document="file:///android_asset/plan.pdf"
      />
    </View>
  );
}
