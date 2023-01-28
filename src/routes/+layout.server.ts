import { redirect } from "@sveltejs/kit";
import Authentication from "../Class/Authentication";
import type { RequestEvent } from "./$types";

export const load = (async (event : RequestEvent) => {
    Authentication.protect(event);
});