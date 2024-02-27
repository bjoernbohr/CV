import React, {useEffect, useState} from "react";
import {
  useGetStoredDataContext,
  Media,
} from "../../Providers/GetStorageProvider";
import { FetchAndSave } from "./fetch";
import {useLocalStorage} from 'usehooks-ts';

export const Instagram = (): JSX.Element => {
  FetchAndSave();

  const storedData = useGetStoredDataContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [isDarkTheme, setDarkTheme] = useLocalStorage('ig_media', true)




  return (
    <>
      {loading ? (
        <a
          href={storedData[0].permalink}
          title={"instagram"}
          target={"_BLANK"}
          rel={"noreferrer"}
        >
          <img src={storedData[0].media_url} alt={storedData[0].caption} />
          <span className={"img-bg absolute border-2 border-copperfield left-10 -right-6 top-12  -top-6 -bottom-10 z-[1] pointer-events-none"}></span>
        </a>
      ) : (
        <div>No stored media found</div>
      )}
    </>
  );
};
