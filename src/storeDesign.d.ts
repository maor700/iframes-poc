// Store design

interface TraditinalStore {
    user: IUser,
    authToken: string;
    appName: string,
    mapArea: string,
    filters: Ifilter[],
    iframes: IIframeItem[],
    activeMission: string,
    missions: IMission;
    ALCHEMIST: IStandardStore
    HELIUSE: IStandardStore,
    RAMZOR: IStandardStore
}

interface IStandardStore {
    sources: {
        [key: string]: ISource
    },
    materials: { [key: string]: IMaterial }
}

interface ISource {
    name: string,
    displayName: string,
    schema: ISourceSchema
    isHiddenFromMap: boolean,
    isHiddenFromTimeline: boolean,
    icon: string // base64
}

interface ISourceSchema {
    [key: string]: ISchemaItem
}

interface ISchemaItem {
    key: string,
    valueType: "number" | "string" | "object" | "array",
    dispayName: string
}

interface IMaterial {
    type: string,
    interval: { start: Date, end: Date },
    geo: string,
    drawStyle: Object,
    additionalProps: Object,
    visibilityOnMap: "solo" | "on" | "off"
}

interface IUser {
    firstName: string,
    lastName: string,
    userId: string,
    hirarchy: string
}

interface Ifilter<T = any> {
    name: string,
    isActive: boolean;
    displayName: string,
    icon: string; //base64
    value: T,
    getValue: (value: T) => T
}

interface IIframeItem {
    name: string,
    isActive: boolean
    displayMode: "minimized" | "opened" | "closed",
    detached: boolean,
    size: number[] // [w,h]
    position: number[] // [x,y]
    resizable: ["x"?, "y"?];
    detachable: boolean,
    closeable: boolean
}

interface IMission {
    name:string,
    id: string,
    data: any,
    members: string[]
}