import React, { useContext, useState } from 'react';
import { Store } from '../Store';
import Pagination from './commons/Pagination';
import AlbumCard from '../components/AlbumCard';
import { IAlbum, ICard } from '../interfaces';

export default function SearchResults(): JSX.Element {
    const { state } = useContext(Store);
    const [pag, setPag] = useState<number>(1)

    const onPagination = (pag?: number): void => {
        setPag(pag || 1)
    }
    let dataPerPag = state.albums.slice((pag - 1) * 20, ((pag - 1) * 20) + 20)

    return (
        <div className='containerGrid'>
            <ul className="cards">
                {!!dataPerPag && dataPerPag.map((album: IAlbum, index: number) => {
                    const props: ICard = {
                        album,
                        index
                    }
                    return (
                        <AlbumCard {...props} />
                    )
                })}
            </ul>
            {state.albums.length > 20 ? <Pagination
                total={state.albums.length}
                itemsPag={20}
                pag={pag}
                onPagination={onPagination} /> : null}

        </div>
    )
}