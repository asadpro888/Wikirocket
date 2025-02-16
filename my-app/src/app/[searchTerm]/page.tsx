import React from 'react'
import getWikiResults from '../../../lib/getWikiResults'
import Item from './components/Item'
type Props = {
    params:{
        searchTerm: string
    }
}
export async function genrateMetadata ({params: {searchTerm}}: Props){
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('20%', ' ')

    if(!data?.query?.pages){
        return{
            title: `${displayTerm} Not found`
        }
    }
    return{
        title: displayTerm,
        description: `Search result for ${displayTerm}`
    }
}
export default async function SearchResults({params: {searchTerm}}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
            {results
                ? Object.values(results).map(results => {
                    return <Item key={results.pageid} result={results}/>
            })
            :<h2 className='p-2 text-xl'>{`${searchTerm} Not found`}</h2>
        }
        </main>
    )
  return content
}