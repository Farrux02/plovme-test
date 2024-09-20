function useNumberFormatter(number: number) {
  const formattedNumber = useMemo(() => {
    if (typeof number !== "number") return "";

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }, [number]);

  return formattedNumber;
}

export default useNumberFormatter;
