import { Section, Item, List, Label } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  const combinedStats = stats.reduce((acc, curr) => {
    const existingItem = acc.find(item => item.label === curr.label);
    if (existingItem) {
      existingItem.percentage += curr.percentage;
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);
  return (
    <Section>
      {title && <h2>{title}</h2>}
      <List>
        {combinedStats.map(item => (
          <Item key={item.id} color={getRandomHexColor()}>
            <Label>{item.label}</Label>
            <span>{item.percentage} %</span>
          </Item>
        ))}
      </List>
    </Section>
  );
};
