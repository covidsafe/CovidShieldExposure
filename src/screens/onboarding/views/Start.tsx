import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Box, Text, Button, Icon} from 'components';
import {useNavigation} from '@react-navigation/native';
import {useI18n} from '@shopify/react-i18n';
import {Theme} from 'shared/theme';

export const Start = () => {
  const [i18n] = useI18n();
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
      <Box paddingHorizontal="xl">
        <Box paddingHorizontal="l" marginTop="m">
          <Text
            variant="bodyTitle"
            color="overlaySectionTitle"
            marginHorizontal="l"
            marginBottom="l"
            textAlign="center"
            accessibilityRole="header"
          >
            {i18n.translate('OnboardingStart.Title')}
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" marginBottom="l">
          <Icon size={30} name="icon-notifications" color="overlayIcon" />
          <Text variant="bodyText" color="overlaySecondaryBodyText" marginLeft="m" marginRight="m">
            {i18n.translate('OnboardingStart.Body1')}
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" marginBottom="l">
          <Icon size={30} name="icon-notify" color="overlayIcon" />
          <Text variant="bodyText" color="overlaySecondaryBodyText" marginLeft="m" marginRight="m">
            {i18n.translate('OnboardingStart.Body2')}
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" marginBottom="l">
          <Icon size={30} name="icon-learn-more" color="overlayIcon" />
          <Button
            text={i18n.translate('OnboardingStart.TutorialAction')}
            variant="bigFlatWhite"
            onPress={() => navigation.navigate('Tutorial')}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
