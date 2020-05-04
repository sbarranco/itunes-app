import React, { useContext } from 'react';
import { Store } from '../Store';
import { IAction, IAlbum } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {
    faBookmark as faBookmarkRegular
} from '@fortawesome/free-regular-svg-icons';
import { SuccessNotify } from '../components/commons/Notifications';

export default function AlbumCard({ ...props }): JSX.Element {
    const { state, dispatch } = useContext(Store);
    const { album, index } = props;

    const toggleMark = (): IAction => {
        const albumIsMark = state.bookMarks.includes(album);
        if (albumIsMark) {
            const markWihoutAlbum = state.bookMarks.filter((mark: IAlbum) => mark !== album)
            return dispatch({
                type: 'REMOVE_MARK',
                payload: markWihoutAlbum
            })
        } else {
            SuccessNotify()
            return dispatch({
                type: 'ADD_MARK',
                payload: album
            })
        }
    }

    return (
        <li key={'item' + index} className="cards__item">
            <div className="card">
                <img className="card__image" alt={`${album.collectionName} album by ${album.artistName}`}
                    src={album.artworkUrl100} />
                <div className="card__content">
                    <div className="card__title">{album.collectionName}</div>
                    <p className="card__text">{album.artistName}</p>
                    <button type="button" className="card__btn" onClick={() => toggleMark()}>
                        <FontAwesomeIcon icon={state.bookMarks.find((mark: IAlbum) => mark === album) ? faBookmark : faBookmarkRegular} />
                    </button>
                </div>
            </div>
        </li>
    )
}