import React, { ChangeEvent, FC } from "react";
import { Select } from "@chakra-ui/react";

import { useAppDispatch } from "../../store/hooks";
import { setFilterCategory } from "../../store/slices/transactionsSlice";

const CategoryFilter: FC = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setFilterCategory(e.target.value));
  };

  return (
    <Select placeholder="Filter by category" onChange={handleChange} mt={4} mb={4}>
      <option value="Salary">Salary</option>
      <option value="Food">Food</option>
    </Select>
  );
};

export default CategoryFilter;
