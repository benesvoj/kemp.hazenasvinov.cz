import {sections} from '../utils/urls';
import {ZoneHeading} from './Zone/components/ZoneHeading';
import {textData} from '../api/data';
import {Zone} from './Zone/Zone';

export const Information = () => {
  return (
    <Zone url={sections.information}>
      <ZoneHeading heading={textData.information.heading} text={textData.information.text} />
    </Zone>
  );
};
