/* exported capitalizeWords */
const capitalizeWords = (string: string): string => {
  const sep: string[] = string.split(' ');
  const final: string[] = [];
  for (let i = 0; i < sep.length; i++) {
    const together = sep[i][0].toUpperCase() + sep[i].slice(1).toLowerCase();
    final.push(together);
  }
  return final.join(' ');
};
