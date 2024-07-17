import React from "react";
import Button from "./Button";
import { useContent } from "../context/ContentContext";

type Props = {};

export default function ToggleButton({}: Props) {
  const { dispatch } = useContent();
  return (
    <Button onClick={() => dispatch({ type: "toggleAll" })}>Toggle All</Button>
  );
}
