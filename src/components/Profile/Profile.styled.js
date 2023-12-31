import styled from 'styled-components';

export const Box = styled.div`
  width: 600px;
  margin: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f0fff0;
  border-radius: 12px;
`;

export const Img = styled.img`
  width: 240px;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Descr = styled.div``;
export const Name = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
`;

export const Tag = styled.p`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 600;
`;

export const Location = styled.p`
  margin-bottom: 26px;
  font-size: 16px;
  font-weight: 600;
  color: #0505057e;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 20px;
  border: 1px solid lightgrey;
  padding: 10px;
  background-color: #f5fffa;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  margin-top: 6px;
  font-size: 18px;
  font-weight: 600;
`;

export const Label = styled.span`
  color: #0505057e;
  font-weight: 600;
`;
