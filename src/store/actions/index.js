import { AUTHORIZATION_PASSED } from "../constants";

export function submitAuthorization() {
  return { type: AUTHORIZATION_PASSED };
}
