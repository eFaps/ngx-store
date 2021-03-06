import { WebStorageUtility } from "./webstorage.utility";
import { Config } from "../config/config";
import { cookiesStorage } from "./storage/cookies-storage";
import { SharedStorageUtility } from "./shared-storage.utility";
import { sharedStorage } from "./storage/shared-storage";

export const localStorageUtility: WebStorageUtility = new WebStorageUtility(
  typeof localStorage !== "undefined" ? localStorage : null,
  Config.prefix,
  Config.previousPrefix
);
export const sessionStorageUtility: WebStorageUtility = new WebStorageUtility(
  sessionStorage,
  Config.prefix,
  Config.previousPrefix
);
export const cookiesStorageUtility: WebStorageUtility = new WebStorageUtility(
  cookiesStorage,
  Config.prefix,
  Config.previousPrefix
);
export const sharedStorageUtility: SharedStorageUtility = new SharedStorageUtility(
  sharedStorage,
  Config.prefix,
  Config.prefix
);
