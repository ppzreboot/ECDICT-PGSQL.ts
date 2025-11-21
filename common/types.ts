export
type I_collins = 1 | 2 | 3 | 4 | 5

export
type I_inflection_type
    = 'did' // Past Tense
    | 'done' // Past Participle
    | 'ing' // Present Participle
    | 'does' // 3rd Person Singular Present Tense
    | 'er' // Comparative
    | 'est' // Superlative
    | 's' // Plural

export
interface I_ecdict {
    word: string
    phonetic: null | string
    definition: string[]
    translation: string[]
    // pos: 
    collins: null | I_collins
    oxford: boolean
    // tag: string[]
    bnc: null | number
    frq: null | number
    lemma: null | {
        lemma: string
        type: I_inflection_type[]
    }
    inflection: Record<I_inflection_type, string | undefined>
}

export
type I_lookup_from_ECDICT = (word: string) => Promise<I_ecdict | null>
