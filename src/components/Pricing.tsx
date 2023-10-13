import {Stack, VStack} from '@chakra-ui/react';
import {PriceBox} from './PriceBox/PriceBox';
import {getCamps} from '../utils/campList';
import {sections} from '../utils/urls';
import {ZoneHeading} from './Zone/components/ZoneHeading';
import {textData} from '../api/data';
import {Zone} from './Zone/Zone';

export const Pricing = () => {
  const camps = getCamps();

  return (
    <Zone url={sections.pricing}>
      <VStack spacing={2} textAlign="center">
        <ZoneHeading heading={textData.pricing.heading} text={textData.pricing.text} />
      </VStack>
      <Stack
        direction={{base: 'column', md: 'row'}}
        textAlign="center"
        justify="center"
        spacing={{base: 4, lg: 10}}
        py={10}
      >
        {camps.length
          ? camps.map((camp) => {
              return (
                <PriceBox
                  key={camp.id}
                  id={camp.id}
                  title={camp.name}
                  description={camp.description}
                  price={camp.price}
                  dateFrom={camp.dateFrom}
                  dateTo={camp.dateTo}
                  place={camp.place}
                  ageFrom={camp.ageFrom}
                  ageTo={camp.ageTo}
                  // limitFrom={getParticipantsCount(camp.id)}
                />
              );
            })
          : null}
      </Stack>
    </Zone>
  );
};
