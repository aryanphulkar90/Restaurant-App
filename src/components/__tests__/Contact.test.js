import React from 'react';
import Contact from "../Contact"
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact us test cases", ()=>{
    it("Should load Contact us component", () => {
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
   })
   
   it("Should load button inside contact component", () => {
       render(<Contact/>)
       const button = screen.getByText("Submit")
       expect(button).toBeInTheDocument()
   })
   
   it("Should load input inside contact component", () => {
       render(<Contact/>)
       const input = screen.getByPlaceholderText("Name")
       expect(input).toBeInTheDocument()
   })
   
   it("Should load input inside contact component", () => {
       render(<Contact/>)
       const input = screen.getByPlaceholderText("Name")
       expect(input).toBeInTheDocument()
   })
   
   it("Should load 2 input boxes insibe contact component", () => {
       render(<Contact/>)
       const inputBoxes = screen.getAllByRole("textbox")
       expect(inputBoxes.length).toBe(2)
   })
})

