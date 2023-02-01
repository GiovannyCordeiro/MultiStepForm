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

  it("Name Validation", () => {
    const data = verifyDataUser("User midName LastName", "name");
    expect( data ).toBe(true);
  })

  it("Email Validation", () => {
    const data = verifyDataUser("test@test.com", "e-mail");
    expect( data ).toBe(true);
  })

  it("Number Validation", () => {
    const data = verifyDataUser("+11238885555555", "number");
    expect( data ).toBe(true);
  })

});