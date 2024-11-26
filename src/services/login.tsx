import axios from "axios"

const NAVER_CLIENT_ID='uczMdDyQuK8sdb1yMHcJ';
const NAVER_REDIRECT_FRONT='http://localhost:3000/callback';
const NAVER_REDIRECT_BACK='http://localhost:8080/callback';

export const naverLoginRedirectToFront = () => {
  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_FRONT}`;
  window.location.href = naverAuthUrl;
}

export const naverLoginRedirectToBack = () => {
  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_BACK}`;
  window.location.href = naverAuthUrl;
}