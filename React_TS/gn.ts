interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    content: string;
    extra: IAuthor[] | ICategory[];
}


interface IPropsBetter<T> {
    id: number;
    title: string;
    description: string;
    extra: T[];
} 

const testMe: IPropsBetter<String>  = {
    id: 1,
    title: 'test',
    description: 'test',
    extra: ['test', 'test2'],
}

interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    content: string;
    extra: T[];
} 

const testMe2: IPostEvenBetter<IAuthor>  = {
    id: 1,
    title: 'test',
    content: 'test',
    extra: [{id: 1, username: 'test'}],
}

const testMe3: IPostEvenBetter<ICategory>  = {
    id: 1,
    title: 'test',
    content: 'test',
    extra: [{id: 1, title: 'test'}],
}