'use client';

export default function PrivateComponent({isLoggedIn}: {isLoggedIn: boolean}) {
  if (!isLoggedIn) {
    window.alert('로그인이 필요합니다');
    window.location.href = '/';
  }

  return (
    <div>
      <h2>여기는 회원만 들어올수 있지롱</h2>
    </div>
  )
}