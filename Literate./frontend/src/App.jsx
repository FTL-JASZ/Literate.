import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizeProvider } from "./contexts/authUser";
import { BudgetProvider } from "./contexts/budget";
import {
  Landing,
  Login,
  Signup,
  Home,
  MSBudget,
  Profile,
  Dashboard,
  ExpenseTracking,
} from "./pages/index";
import { AuthRoute, NotAuthRoute } from "./components/index";

export default function AppContainer() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <ChakraProvider>
        <AuthorizeProvider>
          <BudgetProvider>
            <App />
          </BudgetProvider>
        </AuthorizeProvider>
      </ChakraProvider>
    </NextUIProvider>
  );
}

function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route
            path="/"
            element={
              <NotAuthRoute>
                <Landing />
              </NotAuthRoute>
            }
          />
          <Route
            path="/Signup"
            element={
              <NotAuthRoute>
                <Signup />
              </NotAuthRoute>
            }
          />
          <Route
            path="/Dashboard/Profile"
            element={
              <AuthRoute>
                <Dashboard display={<Profile />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route path="/budget" element={<MSBudget></MSBudget>}></Route>
          {/* <Route
            path="/Budget"
            element={
              <AuthRoute>
                <Budget handleToggle={handleToggle} isOpen={isOpen} />
              </AuthRoute>
            }
          /> */}
          {/* <Route
            path="/Home"
            element={
              <AuthRoute>
                <Home handleToggle={handleToggle} isOpen={isOpen} />
              </AuthRoute>
            }
          /> */}
          <Route
            path="/Dashboard"
            element={
              <AuthRoute>
                <Dashboard display={<Home />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Create-Budget"
            element={
              <AuthRoute>
                <Dashboard display={<MSBudget />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Add-Expense"
            element={
              <AuthRoute>
                <Dashboard display={<ExpenseTracking />}></Dashboard>
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
