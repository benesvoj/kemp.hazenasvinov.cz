import {Box} from '@chakra-ui/react';
import {ZoneHeading} from './Zone/components/ZoneHeading';
import {textData} from '../api/data';
import {Zone} from './Zone/Zone';
import {useTheme} from 'styled-components';

export const InstagramFeed = () => {
  const theme = useTheme();

  return (
    <Zone bg={theme.background.secondary}>
      <ZoneHeading heading={textData.feed.heading} text={textData.feed.text} />
      <Box>
        <figure data-behold-id={textData.feed.instagramKey}></figure>
      </Box>
    </Zone>
  );
};
