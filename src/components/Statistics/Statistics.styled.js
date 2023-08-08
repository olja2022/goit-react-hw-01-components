import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  width: 600px;
  border: 1px #f5fffa;
  margin: 40px 20px;
`;

export const List = styled.ul`
  height: 40px;
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

export const Item = styled.li`
  background-color: ${props => props.color};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const Label = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;
