import React from "react";
import {
  Progress,
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Card,
  Container,
} from "@nextui-org/react";
import { BudgetContext } from "../../../../contexts/budget";
import { useContext } from "react";
import apiClient from "../../../../services/apiClient";
import { AuthorizeContext } from "../../../../contexts/authUser";

const CurrentSubCatBudget = ({ name, categoryValues }) => {
  const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);
  const { authState } = useContext(AuthorizeContext);
  let allocationTotal = 0;
  {
    categoryValues.map(
      ({ name, allocation }, index) => (allocationTotal += parseInt(allocation, 10))
    );
  }
  return (
    <div>
      <Text h1>{name} ${allocationTotal}</Text>
      <Progress color="primary" value={(allocationTotal / budgetInfo.total) * 100} />
    </div>
  );
};

export default CurrentSubCatBudget;
