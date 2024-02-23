/* exported getValues */{}
const getValues = (object: Record<string, unknown>): any[] => {
  const values: any[] = [];
  for (const key in object) {
    if (key) {
      values.push(object[key]);
    }
  }
  return values;
};
