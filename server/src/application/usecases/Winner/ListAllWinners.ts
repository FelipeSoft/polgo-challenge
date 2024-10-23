import WinnerRepository from "../../../domain/repository/WinnerRepository";

export default class ListAllWinners {
    public constructor (
        private readonly WinnerRepository: WinnerRepository
    ) {}

    public async execute () {
        return await this.WinnerRepository.all();
    }
}