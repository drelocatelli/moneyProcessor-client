import { writable } from "svelte/store";
import type { IItemsResponse } from "../Services/Types";

const despesaStore = writable<IItemsResponse | null>(null);

export default despesaStore;