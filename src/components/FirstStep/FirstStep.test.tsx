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


describe("Use cases the data validation function with type name", () => {
  it("True case", () => {
    const data = verifyDataUser("Anna Valentine", "name");
    expect( data ).toBe(true);
  })

  it("False case", () => {
    const data = verifyDataUser("Anna Val", "name");
    expect( data ).toBe(false);
  })

  it("False case", () => {
    const data = verifyDataUser("A V", "name");
    expect( data ).toBe(false);
  })

  it("False case", () => {
    const data = verifyDataUser("As V", "name");
    expect( data ).toBe(false);
  })

  it("False case", () => {
    const data = verifyDataUser("As Ve", "name");
    expect( data ).toBe(false);
  })

});

describe("Use cases the data validation function with type e-mail", () => {
  it("True case", () => {
    const data = verifyDataUser("test@test.com", "e-mail");
    expect( data ).toBe(true);
  })

  it("Error", () => {
    const data = verifyDataUser("test@test.c", "e-mail");
    expect( data ).toBe(false);
  })

  it("Error", () => {
    const data = verifyDataUser("test@", "e-mail");
    expect( data ).toBe(false);
  })

  it("Error", () => {
    const data = verifyDataUser("@test.com", "e-mail");
    expect( data ).toBe(false);
  })

  it("Error", () => {
    const data = verifyDataUser("t@t.com", "e-mail");
    expect( data ).toBe(false);
  })
})

describe("Use cases the data validation function with type number", () => {
  it("True case", () => {
    const data = verifyDataUser("1324585422432", "number");
    expect( data ).toBe(true);
  });

  it("error", () => {
    const data = verifyDataUser("13245854222", "number");
    expect( data ).toBe(false);
  });

  it("error", () => {
    const data = verifyDataUser("324585422432", "number");
    expect( data ).toBe(false);
  });

  it("error", () => {
    const data = verifyDataUser("", "number");
    expect( data ).toBe(false);
  });
})