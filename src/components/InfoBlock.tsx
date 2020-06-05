import React from 'react';
import {Theme} from 'shared/theme';

import {Box} from './Box';
import {Button} from './Button';
import {Icon, IconProps} from './Icon';
import {Text} from './Text';

export interface InfoBlockProps {
  icon?: IconProps['name'];
  text: string;
  title?: string;
  titleBolded?: string;
  color: keyof Theme['colors'];
  iconColor?: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
  button: {
    text: string;
    action: () => void;
    variant?: string;
  };
}

export const InfoBlock = ({
  icon,
  iconColor,
  text,
  button: {text: buttonText, action, variant},
  color,
  backgroundColor,
  title,
  titleBolded,
}: InfoBlockProps) => {
  const buttonVariant = variant ? variant : 'bigFlat';
  return (
    <Box borderRadius={10} backgroundColor={backgroundColor} padding="m" alignItems="center">
      {icon && (
        <Box marginBottom="m">
          <Icon name={icon} size={24} color={iconColor}/>
        </Box>
      )}
      {(title || titleBolded) && (
        <Box marginBottom="m" justifyContent="center" flexDirection="row" flexWrap="wrap">
          <Text variant="overlayTitle" accessibilityRole="header" textAlign="center">
            {title && <Text color={color}>{title}</Text>}
            {titleBolded && (
              <Text color={color} fontFamily="Nunito-Bold">
                {titleBolded}
              </Text>
            )}
          </Text>
        </Box>
      )}
      <Text variant="bodyText" fontSize={16} color={color} marginBottom="m" textAlign="center">
        {text}
      </Text>
      <Box marginHorizontal="none" alignSelf="stretch">
        <Button text={buttonText} onPress={action} variant={buttonVariant} />
      </Box>
    </Box>
  );
};
