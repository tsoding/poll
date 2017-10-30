import PollData from "./PollData"

export default interface Poll {
    data(): Promise<PollData>;
}
