'use client'

import { useSearchParams } from "next/navigation";

export default function Callback() {
  const param = useSearchParams();
  const code = param.get("code");

  return (
    <div>
      <h1>Callback</h1>
      <div>인가코드:{code}</div>
    </div>
  );
}