import "@testing-library/jest-dom";

import { fireEvent, getByRole, getByText, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, vi, assert, expectTypeOf} from "vitest";

//Components and funcitions to test
import FirstStep from "./FirstStep";
import {verifyDataUser} from "./FirstStep";


describe("Testing component", () => {
  it("Checking if the existence inputs necessary", () => {
    const { getByTestId, getByRole } = render(<FirstStep/>, {wrapper: MemoryRouter});
    expect( getByTestId("user-name") ).toBeInTheDocument();
    expect( getByTestId("user-email") ).toBeInTheDocument();
    expect( getByTestId("user-number") ).toBeInTheDocument();
    expect( getByRole("button", {name: "Button to submit form"}) ).toBeInTheDocument();
  });
});

describe("Testing datas returned to verifyDataUser is valid", () => {
  const user = {
    name: "User LastName",
    email: "test@test.com",
    number: "(123)1234-1234",
  }
  const data = verifyDataUser(user)

  it("Name Validation", () => {
    expect( data.name ).toMatch(/\D+ \D+/);
  })

  it("Email Validation", () => {
    expect(data.email).toMatch(/(\D+)@(\D+).(\D+)/);
  })

  it("Number Validation", () => {
    expect(data.number).toMatch(/(\d{0,3})(\d{4,5})-(\d{4})/);
  })

});