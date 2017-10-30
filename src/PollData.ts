export default interface PollData {
    id: number,
    title: string,
    options: Array<string>,
    votes: Array<number>
}
