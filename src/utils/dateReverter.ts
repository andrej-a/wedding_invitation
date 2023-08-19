const dateReverter = (date: string) =>
    date.split('-').reverse().join('.').replace('2023', '23');
export default dateReverter;
