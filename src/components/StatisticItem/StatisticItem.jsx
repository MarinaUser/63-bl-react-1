import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import { IconContext } from 'react-icons';

export const StatisticItem = ({ stat: { title, total }, icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ color: 'blue', size: '50px' }}>
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
