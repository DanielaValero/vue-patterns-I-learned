import { UserType } from "./types";
import { inject, InjectionKey, provide, reactive, readonly, UnwrapNestedRefs } from "vue";
const SIDEBAR_MENU_VISIBILITY = Symbol("SidebarMenuConfigContext");

type Config = UnwrapNestedRefs<{
  isSidebarVisible: boolean;
  buttonSelector: string;
  hideSidebarMenuButton: boolean;
  userType?: UserType;
  userGreeting?: string;
}>;

type SetIsSidebarVisible = (isVisible: boolean) => void;
type InitializeSidebarConfig = (config: Config) => void;

interface SidebarMenuConfigContext {
  sidebarConfig: Config;
  initializeSidebarConfig: InitializeSidebarConfig;
  setIsSidebarVisible: SetIsSidebarVisible;
}

const SidebarMenuConfigKey: InjectionKey<SidebarMenuConfigContext> = SIDEBAR_MENU_VISIBILITY;

const sidebarConfig: Config = reactive<Config>({
  isSidebarVisible: false,
  buttonSelector: "",
  hideSidebarMenuButton: true,
});

const initializeSidebarConfig: InitializeSidebarConfig = (config: Config): void => {
  sidebarConfig.isSidebarVisible = config.isSidebarVisible;
  sidebarConfig.buttonSelector = config.buttonSelector;
  sidebarConfig.hideSidebarMenuButton = config.hideSidebarMenuButton;
  sidebarConfig.userType = config.userType;
  sidebarConfig.userGreeting = config.userGreeting;
};

const setIsSidebarVisible: SetIsSidebarVisible = (isVisible: boolean): void => {
  sidebarConfig.isSidebarVisible = isVisible;
};

export function provideSidebarConfig(): SidebarMenuConfigContext {
  const context = {
    sidebarConfig: readonly(sidebarConfig),
    initializeSidebarConfig,
    setIsSidebarVisible,
  };

  provide(SidebarMenuConfigKey, context);

  return context;
}

export function useSidebarMenuConfig(): SidebarMenuConfigContext {
  const context = inject(SidebarMenuConfigKey);

  if (!context) {
    throw new Error("useSidebarMenuConfig must be used with provideSidebarMenuConfig");
  }

  return context;
}
