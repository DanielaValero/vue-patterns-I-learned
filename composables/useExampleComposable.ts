import { UserType } from "./types";
import log from "loglevel";
import { readonly, ref } from "vue";

import DEFAULT_USER_TYPE from "./defaultUserType";

const userType = ref<UserType>(UserType.HeyObiUser);

export function useUserType() {
  const setUserType = (newValue: UserType) => {
    log.debug("[Debug] [Shared.Composable.useUserType]: Setting user type to ", newValue);
    userType.value = newValue;
  };

  const initializeUserType = (initialUserType?: UserType | undefined) => {
    let userTypeToSet;

    if (initialUserType) {
      userTypeToSet = initialUserType;
    }

    if (!userTypeToSet) {
      log.debug("ℹ️ [Debug] [shared: useUserType] No incoming userType. Using default", DEFAULT_USER_TYPE);
      userTypeToSet = DEFAULT_USER_TYPE;
    }

    setUserType(userTypeToSet);
  };

  return {
    userType: readonly(userType),
    setUserType,
    initializeUserType,
  };
}
