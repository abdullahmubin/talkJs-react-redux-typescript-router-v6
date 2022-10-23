import { GalleryActionType } from "../action-types/galleryActionTypes"
import { GalleryAction } from "../actions/galleryAction"
import { IGalleryModelList, IGalleryModel } from "./../types/index"


const initialState: IGalleryModelList = {
    // NOTE: based on logic i prefer it.
    galleryList: [{
        id: 0,
        imgUrl: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
        imgAlt: ""
    },
    {
        id: 1,
        imgUrl: "https://cdn.pixabay.com/photo/2012/12/27/19/40/chain-link-72864__340.jpg",
        imgAlt: ""
    },
    {
        id: 2,
        imgUrl: "https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377__340.jpg",
        imgAlt: ""
    },
    {
        id: 3,
        imgUrl: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
        imgAlt: ""
    },
    {
        id: 4,
        imgUrl: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
        imgAlt: ""
    },
    {
        id: 5,
        imgUrl: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
        imgAlt: ""
    },
    {
        id: 6,
        imgUrl: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
        imgAlt: ""
    },
    {
        id: 7,
        imgUrl: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
        imgAlt: ""
    }
]
}

const galleryReducer = (state: IGalleryModelList = initialState, action: GalleryAction): IGalleryModelList => {

    switch (action.type) {
        default:
            return state
    }
}

export default galleryReducer