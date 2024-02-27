import {useEffect} from 'react';
import axios from 'axios';
import {useCookies} from "react-cookie";


export const FetchAndSave = () => {
  const [cookies, setCookie] = useCookies(['visited']);

  useEffect(() => {
    const token = 'IGQVJVUEF3YXowbDhVQy1DTUNqYjFZAb3J6ZAkhTWi1GOWhjd2JtenFZAWFUtMUN1cnhwcm1laXFFVUM5WktWT0tFRGtNV25ZAUmd6TFVOZA2ktYnpfN2xZASm41NUlGeTFDN0F5NGZATUmF2UU9rTl9vME9kMwZDZD;'
    const url = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=' + token;
    if (!cookies.visited) {
      axios.get(url)
        .then(response => response)
        .then(res => localStorage.setItem('ig_media', JSON.stringify(res.data)))
        .finally(() => {
          setCookie('visited', 'true', {
            maxAge: 9800
        });
      });
    }
  }, [setCookie, cookies]);
}
