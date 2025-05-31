import {createClient} from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
if (!projectId) {
    throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not defined");
}

export const client = createClient({
    projectId,
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});