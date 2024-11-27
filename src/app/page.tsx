'use client';

import { logout, naverLoginRedirectToBack, naverLoginRedirectToFront } from "@/services/login";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>로그인 테스트</h1>
      <button onClick={naverLoginRedirectToFront}>네이버 로그인(프론트로 리다이렉트)</button>
      <button onClick={naverLoginRedirectToBack}>네이버 로그인(백엔드로 리다이렉트)</button>
      <button onClick={logout}>로그아웃</button>

      <h1>회원 전용 페이지</h1>
      <Link href={"/private"}>회원 전용 페이지로 가기</Link>
    </div>
  );
}
