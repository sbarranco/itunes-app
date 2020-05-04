/**All the interfaces */

export interface IAlbum {
    collectionId: number,
    artistName: string,
    collectionName: string,
    artworkUrl100: string
}

export interface ICard {
    album: IAlbum,
    index: number
}

export interface IState {
    albums: Array<IAlbum>,
    bookMarks: Array<IAlbum>
}

export interface IAction {
    type: string,
    payload: any
}

export interface IPropsPag {
    total: number,
    itemsPag: number,
    pag: number,
    onPagination: (pag?:number) => void
}
