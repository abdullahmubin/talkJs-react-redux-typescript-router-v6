export interface ITodoModel {
    id: number
    username: string;
    password: string;
    currentLocation?: string | null
}

export interface IModalInfos {
    userList: ITodoModel[];
    activeUserObj: ITodoModel | null;
    inValidUser?: boolean
}

export interface IModalCurrentUser {
    activeUserObj: ITodoModel | null;
}

export interface IState {
    people: ITodoModel[]
}

export interface IStateProps {
    people: ITodoModel[]
    inValidUser?: boolean
}

export interface ICProps {
    children: React.ReactNode,

}

export interface IGalleryModel {
    id: number;
    imgUrl: string;
    imgAlt: string
}

export interface IGalleryModelList {
    galleryList: IGalleryModel[];

}

export interface INotification{
    show: boolean, 
    message: string 
}