import React from 'react';
import {Box, HStack, List, ListItem, Text, VStack, useColorModeValue} from '@chakra-ui/react';
import {PriceBoxItem} from './components/PriceBoxItem';
import {ReactNode} from 'react';
import {Button as StyledButton} from '../Button/Button';
import {isNotNilOrEmpty} from 'ramda-adjunct';

export type PriceSelectionProps = {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  dateFrom?: number;
  dateTo?: string;
  place?: string;
  ageFrom?: number;
  ageTo?: number;
  theme?: string;
  limitFrom?: number | null;
  limitTo?: number | null;
};

function PriceWrapper({children}: {children: ReactNode}) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{base: 'center', lg: 'flex-start'}}
      borderColor={'gray.500'}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}
export const PriceBox = (props: PriceSelectionProps) => {
  return (
    <>
      <PriceWrapper>
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl">
            {props.title}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="5xl" fontWeight="900">
              {props.price}
            </Text>
            <Text fontSize="3xl" fontWeight="600">
              Kč
            </Text>
          </HStack>
        </Box>
        <VStack bg={useColorModeValue('gray.50', 'gray.700')} py={4} borderBottomRadius={'xl'}>
          <List spacing={3} textAlign="start" px={12}>
            <PriceBoxItem
              title={'Termín'}
              data={`${props.dateFrom} - ${props.dateTo}`}
              icon={'calendar'}
            />
            {isNotNilOrEmpty(props.place) ? (
              <PriceBoxItem title={'Místo'} data={props.place} icon={'camp'} />
            ) : null}
            <PriceBoxItem
              title={'Věk'}
              data={`${props.ageFrom} - ${props.ageTo} let`}
              icon={'people'}
            />
            {isNotNilOrEmpty(props.theme) ? (
              <PriceBoxItem title={'Téma'} data={props.theme} icon={'checkMarkCircle'} />
            ) : null}
            {isNotNilOrEmpty(props.limitTo || props.limitFrom) ? (
              <PriceBoxItem
                title={'Počet přihlášených'}
                data={`${props.limitFrom} z ${props.limitTo}`}
                icon={'sortAmountUp'}
              />
            ) : null}
            <ListItem>{props.description}</ListItem>
          </List>
          <Box pt={7}>
            <StyledButton>Přihlas se</StyledButton>
          </Box>
        </VStack>
      </PriceWrapper>
    </>
  );
};
