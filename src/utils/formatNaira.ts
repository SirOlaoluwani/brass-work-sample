// NOTE: This is a really quick formatting hack. It will never be used in a production app
export const formatNaira = (value: string) => {
  const format = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return value ? `₦${format}` : "";
};
