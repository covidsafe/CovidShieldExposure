import React, {useCallback} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useI18n} from '@shopify/react-i18n';

import {Box} from './Box';
import {Icon} from './Icon';
import {Text} from './Text';

export interface HeaderProps {
  isOverlay?: boolean;
}

export const Header = ({isOverlay}: HeaderProps) => {
  const [i18n] = useI18n();
  const navigation = useNavigation();
  const onLogoPress = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);
  return (
    <TouchableWithoutFeedback onPress={onLogoPress}>
    {
      isOverlay
        ? (
          <Box flexDirection="row" alignItems="center" justifyContent="center" marginTop='-xl'>
            <Box marginRight="s">
              <Icon size={24} name="uw-logo" />
            </Box>
            <Icon size={116} name="cc-exposures-logo" />
          </Box>
        ) : (
          <Box flexDirection="row" alignItems="center" justifyContent="center" marginVertical='-xl'>
            <Box marginHorizontal="s">
              <Icon size={24} name="uw-logo-white" />
            </Box>
            <Icon size={116} name="cc-exposures-logo-white" />
          </Box>
        )
    }
    </TouchableWithoutFeedback>
  );
};
