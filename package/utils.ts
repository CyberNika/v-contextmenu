export const is: {
  [key: string]: (data: any) => boolean,
} = {
  number: (data: any) => typeof data === "number",
};
