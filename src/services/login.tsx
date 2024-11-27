import axios from "axios"

const NAVER_CLIENT_ID='xHEBWkVI40uVtsjV2Jkl';
const NAVER_REDIRECT_FRONT='http://localhost:3000/callback';
const NAVER_REDIRECT_BACK='http://localhost:8080/login/oauth2/code/naver';

export const naverLoginRedirectToFront = () => {
  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_FRONT}`;
  window.location.href = naverAuthUrl;
}

export const naverLoginRedirectToBack = () => {
  const naverAuthUrl = 'http://localhost:8080/oauth2/authorization/naver'
  window.location.href = naverAuthUrl;
}

export const logout = () => {
  const naverAuthUrl = 'http://localhost:8080/logout'
  window.location.href = naverAuthUrl;
}