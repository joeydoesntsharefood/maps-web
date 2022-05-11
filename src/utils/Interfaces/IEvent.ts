interface IContent {
    title: string
    text: string
    img?: string
}

export default interface IEvent {
    _id: string
    content: IContent | IContent[]
}
