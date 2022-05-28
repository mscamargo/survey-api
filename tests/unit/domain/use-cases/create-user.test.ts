import { describe, it } from "https://deno.land/std/testing/bdd.ts";

describe('CreateUserUseCase', () => {
  it('should throw if any dependency throws', () => { })

  describe('when email already exists', () => {
    it('should throw EmailAlreadyInUseError', () => { })
  })

  describe('when email does not exists', () => {
    it('should return the accessToken', () => { })
  })
})
