import React from "react";
import {Card, Skeleton} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";

export default function Loadingcircle() {
  return (
    <section className="w-fit m-auto">
     <Spinner size="lg" />
    </section>
  );
}
