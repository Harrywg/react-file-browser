import { File, Folder } from "./types";
import files from "../../data.json";

export const getFiles = (): Promise<(File | Folder)[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(files as (File | Folder)[]);
        }, 500);
    });
}