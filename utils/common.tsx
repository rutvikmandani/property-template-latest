

export default function handleURL(title: string, url: string) {
  let convertedURL = '';
  if(url.includes('property-detail')){
    convertedURL = `/${url}`;
  }else if(url.endsWith('-real-estate')){
    convertedURL = `/property?city=${title}`;
  }else if(url.includes('-real-estate')){
    convertedURL = `/property?neighborhood=${title}`;
  }
  return convertedURL;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.setItem('transactionType', '');
}