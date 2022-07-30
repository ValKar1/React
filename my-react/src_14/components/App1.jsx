import React from "react";
import {MemoCard} from "./MemoCard";

export function App1() {
  return (
    <>
      <MemoCard
        front="Was ist React?"
        back="Ein universelles JavaScript Framework"
      />
      <MemoCard
        front="Wer ist David Lorenz?"
        back="Eine Person die gerne mit React arbeitet"
      />
      <MemoCard
        front="Wo gibt es leckeres Eis?"
        back="Einfach gefrorene Früchte in den Mixer! Ergo: zuhause!"
      />
    </>
  );
}
