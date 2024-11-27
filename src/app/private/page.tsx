import PrivateComponent from "@/components/PrivateComponent";
import { cookies } from "next/headers";

export default function PrivatePage() {
  const isLoggedIn = cookies().get('Authorization') !== undefined;

  return (
    <div>
      <h1>여기는 회원만 들어올 수 있다요</h1>
      <PrivateComponent isLoggedIn={isLoggedIn} />
    </div>
  )
}