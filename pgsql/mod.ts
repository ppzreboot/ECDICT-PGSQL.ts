import type Postgres from 'postgres'
import type { I_lookup_from_ECDICT, I_ecdict_raw } from '@ppz-ai/ecdict-common'
import { format } from '@ppz-ai/ecdict-common'

export
function make_ECDICT_PGSQL(
    sql: Postgres.Sql,
    schema_name: string,
    table_name: string,
): I_lookup_from_ECDICT {
    return async function lookup_from_ECDICT(word: string) {
        if (word.length > 100 || word.length === 0)
            return null
        const result = await sql`
            select * from ${sql.unsafe(schema_name)}.${sql.unsafe(table_name)} where word=${word}
        `
        // console.log('result', result[0])
        return result[0] ? format(result[0] as I_ecdict_raw) : null // 相信数据库
    }
}
