import { colors, dimensions, typography } from 'modules/common/styles';
import { darken } from 'modules/common/styles/color';
import { BoxRoot } from 'modules/common/styles/main';
import styled from 'styled-components';

const rowTitleSize = 250;
const boxSize = 150;

const MenusContainer = styled.div`
  padding: ${dimensions.coreSpacing}px 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${dimensions.coreSpacing}px;
`;

const RowTitle = styled.h3`
  font-size: ${typography.fontSizeHeading8}px;
  font-weight: ${typography.fontWeightMedium};
  padding: 0 ${dimensions.coreSpacing * 2}px;
  text-transform: uppercase;
  align-self: center;
  margin: 0 0 ${dimensions.coreSpacing}px;
  color: ${colors.colorCoreDarkGray};
  flex-shrink: 0;
  width: ${rowTitleSize}px;
`;

const Box = styled(BoxRoot)`
  width: ${boxSize}px;
  height: ${boxSize}px;

  img {
    height: 83px;
  }
`;

const Divider = styled.div`
  border-bottom: 1px dotted ${darken(colors.borderDarker, 5)};
  padding-bottom: ${dimensions.coreSpacing}px;
  margin: 0 ${dimensions.coreSpacing}px ${dimensions.coreSpacing}px
    ${rowTitleSize}px;
`;

const BoxName = styled.span`
  font-size: ${typography.fontSizeUppercase}px;
`;

export { Row, RowTitle, Box, Divider, BoxName, MenusContainer };
