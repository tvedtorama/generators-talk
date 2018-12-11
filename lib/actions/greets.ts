

export interface IGreetAction {
	type: "GREET"
	payload: {
		greeting: string
	}
}

export const GREET: IGreetAction["type"] = "GREET"
