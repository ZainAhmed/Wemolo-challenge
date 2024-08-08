import { ParkingLot } from "../types/ParkingLot";

export const sortArray = (input: ParkingLot[], order: string) => {
  input.sort((a, b) => {
    const numA = parseInt(a.name.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(b.name.match(/\d+/)?.[0] || "0", 10);
    if (order === "asc") {
      return numA - numB;
    } else if (order === "desc") {
      return numB - numA;
    }
    return 0;
  });
  return;
};

export const filterParkingLotsByAttribute = (
  inputArray: ParkingLot[],
  attributesArray: string[] | undefined,
  attribute: keyof ParkingLot
) => {
  return inputArray.filter((lot) => {
    return attributesArray?.includes(lot[attribute] as string);
  });
};
