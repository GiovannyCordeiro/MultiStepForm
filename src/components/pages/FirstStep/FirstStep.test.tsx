import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe } from "vitest";

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


describe("Use cases the data validation function with type name", () => {
  it("Name is valid", () => {
    const data = verifyDataUser("Anna Valentine", "name");
    expect( data ).toBe(true);
  })

  it("Error in second name", () => {
    const data = verifyDataUser("Anna Val", "name");
    expect( data ).toBe(false);
  })

  it("One letter in first and last names", () => {
    const data = verifyDataUser("A V", "name");
    expect( data ).toBe(false);
  })

  it("Trying to input the minimum limit characters", () => {
    const data = verifyDataUser("As V", "name");
    expect( data ).toBe(false);
  })

  it("Second case the input the minimum limit characters", () => {
    const data = verifyDataUser("As Ve", "name");
    expect( data ).toBe(false);
  })

});

describe("Use cases the data validation function with type e-mail", () => {
  it("Email valid", () => {
    const data = verifyDataUser("test@test.com", "e-mail");
    expect( data ).toBe(true);
  })

  it("Last part of e-mail error", () => {
    const data = verifyDataUser("test@test.c", "e-mail");
    expect( data ).toBe(false);
  })

  it("Missing a final part of e-mail", () => {
    const data = verifyDataUser("test@", "e-mail");
    expect( data ).toBe(false);
  })

  it("Missing a parte of the beginning of the e-mail ", () => {
    const data = verifyDataUser("@test.com", "e-mail");
    expect( data ).toBe(false);
  })

  it("Minimal caracteres for an e-mail", () => {
    const data = verifyDataUser("t@t.com", "e-mail");
    expect( data ).toBe(false);
  })
})

describe("Use cases the data validation function with type number", () => {
  it("Number valid", () => {
    const data = verifyDataUser("1324585422432", "number");
    expect( data ).toBe(true);
  });

  it("Missing minimum amount characters of a number", () => {
    const data = verifyDataUser("13245854222", "number");
    expect( data ).toBe(false);
  });

  it("Missing the character one at the beginning", () => {
    const data = verifyDataUser("324585422432", "number");
    expect( data ).toBe(false);
  });

  it("No number", () => {
    const data = verifyDataUser("", "number");
    expect( data ).toBe(false);
  });
})