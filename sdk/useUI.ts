/**
 * This file takes care of global app side effects
 */

import { signal } from "@preact/signals";

const displayMenu = signal(false);

const state = {
  displayMenu,
};

export const useUI = () => state;
