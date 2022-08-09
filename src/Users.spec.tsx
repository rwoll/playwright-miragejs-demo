import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import { Users } from "./Users";

test("should work", async ({ mount }) => {
  const component = await mount(<Users />);
  await expect(component.locator("li")).toContainText([
    "Luke",
    "Leia",
    "Anakin",
  ]);
});