"use client";
import React, { useContext, useEffect, useState } from "react";
import "./BudgetResults.css";
import {
  Button,
  Spacer,
  Text,
  Row,
  Grid,
  Card,
  Container,
} from "@nextui-org/react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import SubCategoryResults from "../SubCategoryResults/SubCategoryResults";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthorizeContext } from "../../../contexts/authUser";

import { NewBudgetContext } from "../../../contexts/newBudget";

const BudgetResults = ({ budgetLeft }) => {
  const { newBudget } = useContext(NewBudgetContext);
  for (let key in newBudget.budgetData) {
    newBudget.budgetData[key] = newBudget.budgetData[key].filter(
      (obj) => obj.name !== "" && obj.allocation !== 0
    );
  }
  const budgetLabels = Object.keys(newBudget.budgetData);

  const subCatSum = new Array(budgetLabels.length).fill(0);
  Object.keys(newBudget.budgetData).map((category, index) =>
    newBudget.budgetData[category].map((listItem) => {
      subCatSum[index] += parseInt(listItem.allocation);
    })
  );

  return (
    <>
      <Text h1 css={{ textAlign: "center" }}>
        {newBudget.name}
      </Text>
      <Spacer y={1} />
      <Grid.Container gap={2} justify="center">
        {Object.keys(newBudget.budgetData).map((key, index) => (
          <Grid key={index} md={12}>
            <SubCategoryResults
              category={key}
              categoryValues={newBudget.budgetData[key]}
            />
          </Grid>
        ))}
      </Grid.Container>
      <Text size={20} css={{ textAlign: "center" }}>
        Budget Goal: ${newBudget.goal} &emsp; Budget Left: ${budgetLeft}
      </Text>
    </>
  );
};
export default BudgetResults;
