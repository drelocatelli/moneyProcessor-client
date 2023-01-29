import { writable } from "svelte/store";
import type { IResumeResponse } from "../Services/Types";

const resumeStore = writable<IResumeResponse | null>(null);

export default resumeStore;