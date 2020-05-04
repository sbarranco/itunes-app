import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { IPropsPag } from '../../interfaces';

export default function Pagination(props: IPropsPag): JSX.Element | null {

    const [obj, setObj] = useState<{
        startPage: undefined | number,
        endPage: undefined | number,
        pages: undefined | [],
        totalPages: undefined | number
    }>({
        startPage: undefined,
        endPage: undefined,
        pages: undefined,
        totalPages: undefined
    })

    useEffect(() => {
        getPaginador()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.total, props.itemsPag, props.pag])


    const getPaginador = (): void => {
        let totalPages: number = Math.ceil(props.total / props.itemsPag);
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (props.pag <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (props.pag + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = props.pag - 5;
                endPage = props.pag + 4;
            }
        }
        let pages: any = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);


        setObj({
            startPage: startPage,
            endPage: endPage,
            pages: pages,
            totalPages: totalPages
        });
    }

    if (obj) {
        return (
            <ul className="pagination">
                <li className={`page__item ${props.pag === 1 ? 'disabled' : ''}`}>
                    <label className="page-link" onClick={(e) => {
                        e.preventDefault()
                        props.onPagination(1)
                    }}><FontAwesomeIcon icon={faAngleDoubleLeft} /></label>
                </li>
                <li className={`page__item ${props.pag === 1 ? 'disabled' : ''}`}>
                    <label className="page-link" onClick={(e) => {
                        e.preventDefault()
                        props.onPagination(props.pag - 1)
                    }}><FontAwesomeIcon icon={faAngleLeft} /></label>
                </li>

                {obj.pages && obj.pages.map((p: number, index: number) =>
                    <li key={index} className={props.pag === p ? 'page__item active' : 'page__item'}>
                        <label className="page-link" onClick={(e) => {
                            e.preventDefault()
                            props.onPagination(p)
                        }}>{p}</label>
                    </li>
                )}

                <li className={`page__item ${props.pag === obj.endPage ? 'disabled' : ''}`}>
                    <label className="page-link" onClick={(e) => {
                        e.preventDefault()
                        props.onPagination(props.pag + 1)
                    }}><FontAwesomeIcon icon={faAngleRight} />
                    </label>
                </li>
                <li className={`page__item ${props.pag === obj.endPage ? 'disabled' : ''}`}>
                    <label className="page-link" onClick={(e) => {
                        e.preventDefault()
                        props.onPagination(obj.totalPages)
                    }}><FontAwesomeIcon icon={faAngleDoubleRight} />
                    </label>
                </li>
            </ul>

        )
    } else {
        return null
    }

}