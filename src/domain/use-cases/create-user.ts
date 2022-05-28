import { UseCase } from "../contracts/use-case.ts";

class CreateUserUseCase implements UseCase<Input, Output> {
  execute(input: Input): Promise<Output> {
    throw new Error("Method not implemented.");
  }
}

type Input = {
  name: string;
  email: string;
  password: string;
};

type Output = {
  name: string;
  accessToken: string;
};

export { CreateUserUseCase };
