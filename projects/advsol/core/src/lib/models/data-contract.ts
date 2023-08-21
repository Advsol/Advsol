export abstract class DataContract {
    /* public static so we don't pollute public properties of DataContracts */
    public static GetApiUrl(contract: DataContract): string {
        const matchResource = contract.$type.match(/^\s*[a-zA-Z.]+\.([a-zA-Z]+)Data\s*,[^,]*$/);
        if (matchResource === null || matchResource.length !== 2) {
            throw new TypeError(`Could not extract api path from string '${contract.$type}'`);
        }
        return matchResource[1];
    }

    public abstract $type: string;
}