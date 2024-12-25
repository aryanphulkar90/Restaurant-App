import React from "react"
import {render, act, screen, fireEvent} from "@testing-library/react"
import Header from "../Header"
import RestaurantMenu from "../RestaurantMenu"
import Cart from "../Cart"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import MOCK_DATA from "../mocks/mockResMenuData.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>
   Promise.resolve({
     json: () => Promise.resolve(MOCK_DATA)
   })
)

it("should load Restaurant Menu Component", async()=>{
    await act(async()=>{
        render(
        <BrowserRouter>
        <Provider store={appStore}>
           <Header/>
           <RestaurantMenu/>
           <Cart/>
        </Provider>
        </BrowserRouter>
        )
    })
    
    const accordionHeader = screen.getByText("Recommended (9)")
    fireEvent.click(accordionHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(9)
    const addBtns = screen.getAllByRole("button", {name : "Add +"})
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument()
    fireEvent.click(addBtns[0])
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument()
    expect(screen.getAllByTestId("foodItems").length).toBe(10)
    fireEvent.click(screen.getByText("Clear Cart"))
    expect(screen.getAllByTestId("foodItems").length).toBe(9)
})