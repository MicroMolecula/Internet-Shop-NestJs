import { Connection } from 'mongoose';
import { CategorySchema } from './category.modele';

export const UserProviders = [
    {
        provide: 'CATEGORY_MODEL',
        useFactory: (connection: Connection) => connection.model('Category', CategorySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
