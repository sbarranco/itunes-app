import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Store } from '../Store';
import SearchResults from './SearchResults';
import Spinner from './commons/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ErrorNotify } from '../components/commons/Notifications';

export default function Search(): JSX.Element {
  const { state, dispatch } = useContext(Store);
  const [inputText, setInputText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [firstSearch, setFirstSearch] = useState<boolean>(false)

  const onSearch = async () => {
    const url = 'https://itunes.apple.com/search?';

    if (inputText !== '') {
      setFirstSearch(true)
      setIsLoading(true)
      const replaceText: string = inputText.replace(/\s/g, "+").toLowerCase();
      const response = await axios.get(url + 'term=' + replaceText + '&enitity=album&limit=200');

      if (response.status === 200) {
        //dispatch fetch data into the Store
        dispatch({
          type: 'FETCH_DATA',
          payload: response.data.results
        })
        setIsLoading(false)

      } else {
        ErrorNotify()
        setIsLoading(false)
      }
    }

  };

  const keyPressed = (key: string) => (key === "Enter") ? onSearch() : undefined;

  return (
    <>
      <form className="search__form">
        <input className='search__input' type="text" value={inputText} placeholder="Search artist, album,..."
          onChange={e => setInputText(e.target.value)} onKeyPress={e => keyPressed(e.key)}></input>
        <button className='search__btn' type="button" onClick={() => onSearch()}>
          <FontAwesomeIcon icon={faSearch} color="white" />
        </button>
      </form>
      {state !== undefined &&
        <Spinner isLoading={isLoading}>
          {(state.albums.length === 0 && !isLoading && firstSearch) ? "No results found" : <SearchResults />}
        </Spinner>}
    </>
  )

}
