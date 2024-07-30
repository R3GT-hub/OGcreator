import { pgTable ,serial,varchar,text} from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    //name -colname -null or notnull or primary
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')
})