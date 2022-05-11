export interface IContent {
    title: string
    text: string
    img?: string
}

export interface IEvent<T = any> {
    _id: string
    content: T
}
